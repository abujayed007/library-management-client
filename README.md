# 📚 Library Management System (Frontend)

A **minimal library management system frontend** built with **React, Redux Toolkit Query (RTK Query), and TypeScript**.  
This project focuses on **client-side functionality only**, without authentication, categories, or payments.  
Users can view, manage, and borrow books, and see a borrow summary.

---

## 🚀 Project Overview

The goal is to build a **functional and clean frontend application** that interacts with a RESTful API, demonstrating:

- Proper state management with RTK Query.
- CRUD operations for books.
- Borrowing functionality with business rules.
- Simple, responsive UI using Tailwind CSS (or plain CSS).

---

## ✨ Features

### 1. Public Routes

- All pages are **accessible without login**.
- Focused only on essential **book management and borrowing** features.

### 2. Book Management 🛠️

- **Book List Table**:
  - Columns: `Title`, `Author`, `Genre`, `ISBN`, `Copies`, `Availability`, `Actions`.
- **Actions**:
  - **Edit Book**: Opens pre-filled form to update book info.
    > If `copies = 0`, the book is marked **Unavailable**.
  - **Delete Book**: Confirmation dialog before removal.
  - **Borrow Book**: Opens form to borrow book copies.
- **Add New Book**:
  - Fields: Title, Author, Genre, ISBN, Description, Copies, Available (default: true).
  - On submit → redirect to book list and update UI instantly.

### 3. Borrow Book 📖

- Form fields:
  - **Quantity** → Cannot exceed available copies.
  - **Due Date**.
- Business rules:
  - When `copies = 0`, book becomes **Unavailable**.
- On submit:
  - Shows success message.
  - Redirects to **Borrow Summary**.

### 4. Borrow Summary 📊

- Aggregated list of borrowed books.
- Table Columns:
  - `Book Title`
  - `ISBN`
  - `Total Quantity Borrowed`

---

## 🖼️ UI Components

- **Navbar** → Links to:
  - All Books
  - Add Book
  - Borrow Summary
- **Book Table/Grid** → List of books with actions.
- **Footer** → Minimal footer with site info or credits.

---

## 📄 Page Routes

| Route             | Description                                  |
| ----------------- | -------------------------------------------- |
| `/books`          | List all books (view, edit, delete, borrow). |
| `/create-book`    | Form to add a new book.                      |
| `/books/:id`      | Detailed view of a single book.              |
| `/edit-book/:id`  | Edit book details.                           |
| `/borrow/:bookId` | Form to borrow a book.                       |
| `/borrow-summary` | Aggregated list of borrowed books.           |

---

## 🎨 UI/UX Guidelines

- **Minimalist design** with Tailwind CSS (or plain CSS).
- **Easy navigation** with clear buttons and forms.
- **Responsive layout** for mobile, tablet, and desktop.

---

## ⚙️ Tech Stack (Frontend)

- **React** + **TypeScript**
- **Redux Toolkit Query (RTK Query)** for state management
- **Tailwind CSS** (or plain CSS) for styling

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-management-frontend.git
cd library-management-frontend
```
