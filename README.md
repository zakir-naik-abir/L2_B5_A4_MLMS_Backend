Minimal Library Management System - Frontend 📚

This is the frontend for the Minimal Library Management System, a client-side application built with React, TypeScript, and Redux Toolkit Query. It provides a clean, responsive, and user-friendly interface for managing books and borrowing them without any authentication.

Live Demo: [[My Live Frontend Link](https://l2b5a4backend.vercel.app/books)


✨ Key Features:

📖 Full CRUD for Books: Effortlessly Create, Read, Update, and Delete books in the library.
⚙️ Smart Availability: A book is automatically marked as "Unavailable" when its last copy is borrowed.
🚀 Seamless Borrowing System: Users can borrow books with a simple form, specifying quantity and a due date.
📈 Borrow Summary: An aggregated view shows the total number of times each book has been borrowed.
🎨 Clean & Responsive UI: Built with Tailwind CSS, the interface is minimalist, intuitive, and works flawlessly on all devices.
🔔 Real-time Feedback: Toast notifications provide instant feedback for user actions (success, error).
⚡ Optimistic UI Updates: The UI updates instantly for a smooth and fast user experience without waiting for the server response.
🔒 Type-Safe Codebase: Full TypeScript integration on both frontend and backend ensures robustness and fewer runtime errors.


🛠️ Technology Stack:

Layer	Technology
Frontend	React TypeScript Redux Toolkit RTK Query Tailwind CSS Vite
Backend	Node.js Express.js TypeScript MongoDB Mongoose
Dev & Build	ts-node-dev ESLint Prettier
Deployment	Vercel (Frontend), Render (Backend)


API Endpoints:
All backend endpoints are prefixed with /
Method	Endpoint	Description	Access
POST	/create-book	Add a new book	Public
GET	/books	Get all books (with pagination)	Public
GET	/book/:id	Get a single book by ID	Public
PATCH	/edit-book/:id	Update a book's details	Public
DELETE	/delete/:id	Delete a book	Public
POST	/borrow	Borrow a specific book	Public
GET	/borrow-summary	Get aggregated borrow summary	Public


