# Cloud Platform Usage

This is a web application project built with React and Node.js for file uploading.  
Users can upload files such as txt, png, and image files (up to 5MB). PDFs are not accepted.  
Uploaded files are securely stored in an AWS S3 bucket. The frontend is deployed on Vercel and the backend on Render.

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Demo](#demo)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Configuration](#configuration)  
- [Folder Structure](#folder-structure)  
  

## About

Progress-1 is a full-stack web app for file uploading with cloud storage integration and seamless deployment on modern platforms.

It helps users upload files easily with size/type checks, and securely stores files in AWS S3.

## Features

- Upload files (txt, png, jpg, jpeg, gif)
- File size limit of 5MB
- Secure cloud storage with AWS S3
- Separate frontend and backend deployments
- Live demo hosted on Vercel (frontend) and Render (backend)

## Demo

Live site frontend: [https://progress-1-git-main-kavyashree-ms-projects.vercel.app](https://progress-1-git-main-kavyashree-ms-projects.vercel.app)  
Backend API: [https://progress-1-ycb9.onrender.com](https://progress-1-ycb9.onrender.com)

## Tech Stack

- **Backend / Runtime:** Node.js, Express  
- **Frontend:** React.js, CSS  
- **Cloud:** AWS S3 for file storage  
- **Deployment:** Vercel (frontend), Render (backend)

## Installation

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
Start backend server locally (optional):

bash
node index.js
Frontend
Start frontend app locally (optional):

bash
npm start

## Configuration

Add environment variables in `.env` file (create from `.env.example`):
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
S3_BUCKET_NAME=intern-uploader-kavya
AWS_REGION=ap-south-1

##Folder Structure
clean-repo/
├── .dist/                     # Build or compiled files (optional)
├── .env.example.txt           # Sample environment variables for backend config
├── .gitignore.txt             # Git ignore rules for backend folders/files
├── index.js                   # Backend Node.js server entry point
├── node_modules/              # Backend installed dependencies (ignore in git)
├── package-lock.json          # Backend dependency lock file
├── package.json               # Backend dependencies and scripts
└── progress/
    └── progress/              # React frontend source code
        ├── .env               # Frontend environment variables
        ├── .gitignore         # Frontend git ignore rules
        ├── node_modules/      # Frontend dependencies
        ├── package-lock.json  # Frontend lock file
        ├── package.json       # Frontend dependencies and scripts
        ├── public/            # Public frontend assets
        ├── src/               # React component source files
        └── README.md          # Frontend-specific README (optional)
