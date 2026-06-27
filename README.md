# Notes Application 

A full-stack notes application built with the MERN (MongoDB, Express, React, Node.js) stack. This application provides secure note management with user authentication, real-time search, and a responsive interface designed for seamless user experience.

## Features

- User Authentication: Secure sign-up and login using JWT tokens
- Note Management: Create, edit, and delete notes with full control
- Pin Important Notes: Mark critical notes for quick access
- Real-Time Search: Instantly filter and find notes across your collection
- Responsive Design: Tailwind CSS for optimal viewing across all devices
- Secure Backend: Express.js with JWT authentication and protected routes
- Cloud Database: MongoDB Atlas integration for scalable data persistence
- User Notifications: Toast notifications for feedback on actions

## Tech Stack

Frontend: React.js, Tailwind CSS, Axios
Backend: Node.js, Express.js, RESTful APIs
Database: MongoDB Atlas
Authentication: JWT (JSON Web Token)

## Installation

Clone the repository:

```bash
git clone https://github.com/Khushisamundre29/Notes-Application.git
cd Notes-Application
```

Install dependencies for both backend and frontend:

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

Configure environment variables. Create a .env file in the Backend directory with:

```
MONGODB_URI=your_mongodb_atlas_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret_key
PORT=8000
```

## Running the Application

Start the backend server:

```bash
cd Backend
npm start
```

In a new terminal, start the frontend development server:

```bash
cd Frontend
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to access the application.

## Architecture and Data Flow

The Notes Application follows a three-tier architecture that separates concerns across the frontend, backend, and database layers:

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                           │
│                    (React.js Frontend)                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Components: Auth, Notes List, Note Editor, Search Bar  │ │
│  │ State Management: React Hooks (useState, useEffect)    │ │
│  │ HTTP Client: Axios (sends requests to backend)         │ │
│  │ Styling: Tailwind CSS (responsive design)              │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────┬───────────────────────────────┘
                              │
                    RESTful API (HTTP)
                              │
┌─────────────────────────────┴───────────────────────────────┐
│                      SERVER LAYER                           │
│                  (Node.js + Express.js)                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Routes: /auth (login, signup), /notes (CRUD)           │ │
│  │ Middleware: JWT verification, error handling           │ │
│  │ Controllers: Business logic for notes and auth          │ │
│  │ Authentication: JWT token generation and validation    │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────┬───────────────────────────────┘
                              │
                      MongoDB Query
                              │
┌─────────────────────────────┴───────────────────────────────┐
│                      DATA LAYER                             │
│                    (MongoDB Atlas)                           │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Collections: Users, Notes                              │ │
│  │ User Schema: fullName, email, password (hashed)        │ │
│  │ Notes Schema: title, content, tags, isPinned, userId   │ │
│  │ Indexing: Optimized queries for search functionality   │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## User Flow

1. User registers or logs in via React frontend
2. Backend validates credentials and issues JWT token
3. Token is stored in localStorage for subsequent requests
4. User creates/edits/deletes notes through React UI
5. Frontend sends HTTP requests with JWT token in headers
6. Backend middleware verifies token and processes request
7. Database operation is executed and results are returned
8. Frontend updates UI with response data and shows notifications

## Author
Khushi Samundre

## License

This project is open source and available under the MIT License.
