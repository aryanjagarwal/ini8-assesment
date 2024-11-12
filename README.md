# ini8 Assessment App

[Live Demo](https://ini8-assesment.vercel.app/)

The ini8 Assessment App is a full-stack User Management application that enables users to manage a list of users by adding, updating, and deleting their information. It includes both frontend and backend implementations, leveraging a modern tech stack for streamlined performance and ease of use.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## Features

- **Add User**: Input fields for Name, Email, and Date of Birth to add a new user.
- **Update User**: Edit existing user details seamlessly.
- **Delete User**: Remove a user from the list.
- **Responsive UI**: Optimized for both desktop and mobile, with a modern interface built using React and TailwindCSS.

## Tech Stack

### Frontend:
- **React**: For building user interfaces.
- **Vite**: A fast build tool for modern JavaScript development.
- **TailwindCSS**: A utility-first CSS framework for custom styling.
- **Lucide Icons**: Icon library used for edit and delete actions.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage, integrated through MongoDB Atlas.

## Getting Started

Follow these instructions to set up and run the ini8 Assessment App locally.

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB Atlas** account (or a locally running MongoDB instance)
- Any required API keys (for external services if applicable)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/aryanjagarwal/ini8-assesment.git
    cd ini8-assesment
    ```

2. **Backend Setup**

    Navigate to the backend directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

    Configure your environment variables:
    - Create a `.env` file in the backend directory.
    - Add the MongoDB URI for your database connection:
      ```plaintext
      MONGODB_URI=your_mongodb_uri_here
      ```

    Start the backend server:

    ```bash
    node index.js
    ```

3. **Frontend Setup**

    Navigate to the frontend directory, install dependencies, and configure the API endpoint:

    ```bash
    cd frontend
    npm install
    ```

    Open `frontend/src/api.js` and update the `API_URL` constant to match your backend endpoint (default is `http://localhost:5000`):

    ```javascript
    const API_URL = 'http://localhost:5000/api/users';  // Adjust to your API URL
    ```

    Start the frontend development server:

    ```bash
    npm run dev
    ```

## Configuration

The following environment variables should be configured:

- **MONGODB_URI**: MongoDB connection string, located in the backend `.env` file.

## Usage

After setup, you can access the app's user interface and interact with the user management features:

1. **Add**: Add a new user by entering Name, Email, and Date of Birth.
2. **Update**: Edit any user’s information by clicking on the edit icon.
3. **Delete**: Remove a user by clicking the delete icon.

## Troubleshooting

- **Server Errors**: Ensure the MongoDB URI in `.env` is correct and MongoDB service is running.
- **Frontend Connection Issues**: Confirm that the `API_URL` in `frontend/src/api.js` matches the backend’s running URL.
