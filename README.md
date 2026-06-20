# LinkedIn Clone

A full-stack social networking application inspired by LinkedIn, built with React, Redux Toolkit, and Firebase. The application replicates core professional networking features including authentication, real-time posting, likes, comments, and user interaction.

## Overview

LinkedIn Clone is a modern web application designed to simulate the functionality of a professional networking platform. Users can create accounts, authenticate securely, share posts, interact with content through likes and comments, and view updates in real time.

The project leverages Firebase Authentication for user management and Firestore for cloud-hosted real-time data storage, while Redux Toolkit provides centralized state management across the application.

This project demonstrates the integration of modern frontend technologies with cloud services to create a responsive and scalable user experience.

## Features

### Authentication

* User registration and login
* Secure authentication using Firebase Authentication
* Persistent user sessions
* Logout functionality

### Social Feed

* Create new posts
* View posts in real time
* Dynamic feed updates
* Responsive content rendering

### User Interaction

* Like posts
* Comment on posts
* Real-time engagement updates
* Interactive user experience

### Application Features

* Centralized state management with Redux Toolkit
* Real-time cloud database integration
* Responsive design for desktop and mobile devices
* Modern UI inspired by LinkedIn

## Tech Stack

### Frontend

* React 19
* React Router DOM
* Material UI (MUI)

### State Management

* Redux Toolkit
* React Redux

### Backend Services

* Firebase Authentication
* Firebase Firestore

### Animation & UI

* React Flip Move
* Material UI Icons

### Deployment

* GitHub Pages

## Screenshots

> Add screenshots of the application here.

## Installation

Clone the repository:

```bash
git clone https://github.com/Maryam-Rastin/linkedin-clone-redux.git
```

Navigate to the project folder:

```bash
cd linkedin-clone-redux
```

Install dependencies:

```bash
npm install
```

Create a Firebase configuration file and add your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

Start the development server:

```bash
npm start
```

The application will run locally at:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Architecture

```text
src/
├── app/
├── features/
│   ├── user/
│   └── posts/
├── components/
├── pages/
├── firebase/
├── assets/
├── App.js
└── index.js
```

## Technical Highlights

### Firebase Authentication

Implemented secure user authentication with Firebase, including account management and persistent login sessions.

### Firestore Real-Time Database

Integrated Firestore to enable real-time data synchronization, ensuring users instantly see newly created posts, likes, and comments.

### Redux Toolkit State Management

Utilized Redux Toolkit to manage:

* Authentication state
* User information
* Application-wide data
* UI state management

### Component-Based Design

Built reusable React components to improve maintainability, scalability, and code organization.

## Challenges & Solutions

### Challenge: Real-Time Data Synchronization

Users expect social media applications to update content instantly without manual refreshes.

### Solution

Implemented Firestore real-time listeners to automatically synchronize new posts, comments, and likes across all active sessions.

### Challenge: Managing Authentication State

Authentication data must remain consistent across multiple application views.

### Solution

Used Redux Toolkit alongside Firebase Authentication to maintain a centralized and predictable authentication flow.

### Challenge: Creating a Responsive Social Feed

The feed needed to handle dynamic content while maintaining performance and usability.

### Solution

Developed reusable feed components and optimized rendering behavior to provide a smooth user experience.

## Learning Outcomes

This project strengthened my understanding of:

* Firebase Authentication
* Firestore database integration
* Real-time application development
* Redux Toolkit state management
* React application architecture
* Component-driven development
* Frontend deployment workflows
* Cloud-based application services

## Future Improvements

* User profile customization
* Direct messaging system
* Image and media uploads
* Notifications system
* Connection requests
* Advanced search functionality
* User recommendations
* Dark mode support

## What I Learned

Through this project, I gained practical experience building a real-time social networking application using React, Redux Toolkit, and Firebase. I learned how to integrate cloud services, manage complex application state, implement secure authentication, and create dynamic user experiences that update instantly across multiple users.

## Author

**Maryam Rastin**

GitHub: https://github.com/Maryam-Rastin

## License

This project is available under the MIT License.
