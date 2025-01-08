# 📱 MERN Stack Mobile OTP Authentication Project

This project is a Mobile OTP Authentication system developed using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to register, mobile number, and view their details, incorporating security features like JWT token authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Usage](#usage)
- [Technologies](#technologies)

## Features

- 📝 User Registration: Users can create accounts with their  phone number, and verify the otp etc.
- 🔐 OTP Verification: Secure one-time password (OTP) verification via Fast2SMS for added account security.
- 🔒 JWT Authentication: JSON Web Tokens are used for secure user authentication and authorization.
- 🔐 Password Security: User passwords are hashed using bcrypt to protect sensitive data.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- 🚀 Node.js and npm (Node Package Manager) installed.
- 📦 MongoDB database for storing user data.
- 📲 Fast2SMS account and credentials for OTP verification.
- 🗺 IPinfo access token for IP address data

## Installation

1. Clone the repository:

   bash
   git clone https://github.com/PradipKhamkar/Mobile_OTP_Authentication
   

2. Change into the project directory:

   bash
   cd Mobile_OTP_Authentication
   

3. Install server dependencies:

   bash
   npm install
   

4. Install client dependencies:

   bash
   cd frontend
   cd backend
   npm install
   

## Configuration

1. Create a .env file in the root directory with the following environment variables:

   env
   
   MONGODB_URL=your_mongodb_url/otp-login
   FAST_API_KEY=your_fast_api_key
   JWT_SECRET=your_jwt_secret_key 
   port=your_port_number 
   

## Endpoints

The following are the API endpoints available in this project:

- 🌐 **POST  /api/v1/generateOtp: Sending the otp to mobile number.
- 🌐 **POST  /api/v1/verifyOtp: Sending the otp to validation.


## Usage

1. Start the backend sever:

   bash
   cd backend
   npm run dev
   

2. Start the frontend client:

   bash
   cd frontend
   npm start
   

3. Access the application in your web browser at http://localhost:8080.9

## Technologies

- 📦 *MongoDB*: A NoSQL database for storing user data.
- ⚙ *Express.js*: A web application framework for Node.js.
- ⚛ *React*: A JavaScript library for building user interfaces.
- 🚀 *Node.js*: A JavaScript runtime for server-side development.
- 🔑 *JWT*: JSON Web Tokens for user authentication.
- 🔒 *bcrypt*: A library for hashing user passwords.


## Acknowledgments 🙏

Thanks to Fast2SMS, for providing their amazing services for this project.
Special thanks to the MERN Stack and communities.


Happy coding! 👩‍💻👨‍💻