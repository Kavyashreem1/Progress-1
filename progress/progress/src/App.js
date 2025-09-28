import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'text/plain'];
  const maxFileSize = 5 * 1024 * 1024; // 5 MB

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setMessage('Please select a file.');
      setFile(null);
      return;
    }
    if (!allowedTypes.includes(selectedFile.type)) {
      setMessage('File type not allowed.');
      setFile(null);
      return;
    }
    if (selectedFile.size > maxFileSize) {
      setMessage('File size exceeds 5 MB.');
      setFile(null);
      return;
    }
    setMessage('');
    setFile(selectedFile);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a valid file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();
      console.log('Raw response:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        setMessage('Server did not return JSON: ' + text);
        setFileUrl('');
        return;
      }

      if (response.ok) {
        setMessage('Upload successful!');
        setFileUrl(data.fileUrl);
      } else {
        setMessage(`Upload failed: ${data.message || text}`);
        setFileUrl('');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setFileUrl('');
    }
  };

  return (
    <div className="container">
      <h1>Upload File</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
      <p className="message">{message}</p>
      {fileUrl && (
        <p>
          Uploaded File: <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="uploaded-link">{fileUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
