# LinkedIn Clone

A full-stack React application inspired by LinkedIn that helps users create accounts, share posts, and interact with content through an intuitive and responsive interface.

Live demo: https://maryam-rastin.github.io/linkedin-clone-redux/

## Overview

LinkedIn Clone is a web application designed to simulate the functionality of a professional networking platform. The application uses Firebase for authentication and real-time data storage, while Redux Toolkit provides centralized state management, giving users a fast and reliable social networking experience.

Built with React, Redux Toolkit, and Firebase, the project demonstrates modern frontend development practices including component-based architecture, cloud service integration, real-time data synchronization, and responsive design.

## Features

* User registration and secure login with Firebase Authentication
* Persistent user sessions and logout functionality
* Create and view posts in a real-time social feed
* Like and comment on posts
* Real-time engagement and feed updates
* Responsive and mobile-friendly design
* Fast and dynamic user experience powered by React
* Modern UI inspired by LinkedIn

## Tech Stack

### Frontend

* React 19
* React Router DOM
* Material UI (MUI)

### Additional Libraries

* Redux Toolkit
* React Redux
* React Flip Move
* Material UI Icons

### Backend Services

* Firebase Authentication
* Firebase Firestore

### Deployment

* GitHub Pages

## Screenshots

> Add screenshots of the application here.

## Installation

Clone the repository:

```
git clone https://github.com/Maryam-Rastin/linkedin-clone-redux.git
```

Navigate to the project directory:

```
cd linkedin-clone-redux
```

Install dependencies:

```
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

```
npm start
```

The application will run locally at:

```
http://localhost:3000
```

## Build for Production

Create an optimized production build:

```
npm run build
```

This generates a `build` folder containing the production-ready static files.

## Deployment

This project is deployed to GitHub Pages. Deploy the latest build with:

```
npm run deploy
```

This publishes the contents of the `build` folder to GitHub Pages.

## Project Structure

```
linkedin-clone-redux/
├── src/
│   ├── app/                 # Redux store configuration
│   ├── assets/               # Images, icons, and static assets
│   ├── components/         # Reusable UI components
│   ├── pages/                # Page-level views
│   ├── features/             # Redux slices (user, posts)
│   ├── firebase/             # Firebase configuration and services
│   ├── App.js
│   └── index.js
├── screenshot/             # Project screenshots for README
├── package.json
└── README.md
```

## Learning Objectives

This project was built to strengthen skills in:

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