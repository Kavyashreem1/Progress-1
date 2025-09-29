🌩️ Cloud Platform Usage – File Upload App

This is a full-stack web application built with React (frontend) and Node.js + Express (backend) for uploading files.
Uploaded files are securely stored in an AWS S3 bucket.
Frontend deployed on Vercel
Backend deployed on Render

📑 Table of Contents

About
Features
Demo
Tech Stack
Installation
Usage
Configuration
Folder Structure 
  

📌 About

Challenge-1 is a cloud-based file uploader web app that allows users to upload files easily with:
File type & size validation
Secure storage on AWS S3
Seamless cloud deployment (Vercel + Render)

✨ Features

✅ Upload supported files: txt, png, jpg, jpeg, gif
✅ File size limit: 5MB
✅ Secure AWS S3 cloud storage
✅ Separate frontend & backend deployment
✅ Live demo hosted on Vercel (frontend) + Render (backend)

🚀 Demo

Frontend (Live Site): https://progress-1-git-main-kavyashree-ms-projects.vercel.app

Backend API: https://progress-1-ycb9.onrender.com

🛠️ Tech Stack

Backend / Runtime: Node.js, Express
Frontend: React.js, CSS
Cloud Storage: AWS S3
Deployment: Vercel (frontend), Render (backend)

⚙️ Installation

Clone the repository
git clone https://github.com/Kavyashreem1/Progress-1.git
cd Progress-1

Navigate to backend folder, install dependencies
cd upload-backend
npm install

Navigate to frontend folder, install dependencies
cd ../progress/progress
npm install

Usage
Backend
Start backend server locally (optional)

bash
node index.js
Frontend
Start frontend app locally (optional)

bash
npm start

🔐 Configuration

Add environment variables in `.env` file (create from `.env.example`):
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
S3_BUCKET_NAME=intern-uploader-kavya
AWS_REGION=ap-south-1

📂 Folder Structure
clean-repo/
├── index.js              # Backend Node.js server entry point
├── package.json          # Backend dependencies
├── .env.example          # Sample environment variables
├── upload-backend/       # Backend server code
│   ├── node_modules/     
│   ├── package-lock.json 
│   └── index.js          
└── progress/             # React frontend source code
    ├── public/           # Public assets
    ├── src/              # React components
    ├── package.json      
    ├── package-lock.json 
    └── .env              


🎥 Demo Videos  
- Challenge 1: [Watch Demo](https://drive.google.com/file/d/1cy-A-BvxWYTUKrXvGr4NVbCGoIncjc0C/view?usp=sharing)  
