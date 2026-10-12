# Gym Management System

A web-based Gym Management System designed to manage gym members and view membership statistics.

## Features

- User registration and login
- JWT-based authentication
- Add, view, update, and delete gym members
- Dashboard statistics for total, active, and expired members
- React-based frontend
- MySQL database integration

## Technologies Used

- Frontend: React, Vite, JavaScript, CSS
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: JSON Web Tokens (JWT)
- Version Control: Git and GitHub

## Project Structure

```text
GYM/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   └── gym/
│       ├── src/
│       ├── public/
│       └── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mangalasreenivasulu80-svg/gym-management-system.git
cd gym-management-system
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and configure the required database connection, port, and JWT secret variables. Use your own local credentials and keep this file private.

### 3. Configure the database

Start MySQL and create the database and tables required by the application. Configure the database connection in the backend environment file.

### 4. Start the backend

```bash
node server.js
```

### 5. Start the frontend

Open a separate terminal:

```bash
cd frontend/gym
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Security

- Do not commit `.env` files or database credentials.
- Use a strong, private JWT secret.
- Keep `node_modules` out of version control.

## Author

Gym Management System Project