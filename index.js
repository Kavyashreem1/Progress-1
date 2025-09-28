require('dotenv').config();

const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Multer config with 5MB file size limit
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();

app.post('/upload', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File size exceeds 5 MB limit.' });
      }
      return res.status(500).json({ message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `${Date.now()}_${req.file.originalname}`,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
      // ACL: 'public-read', // Uncomment if bucket policy allows
    };

    s3.upload(params, (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to upload file: ' + err.message });
      }
      res.json({ fileUrl: data.Location });
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
