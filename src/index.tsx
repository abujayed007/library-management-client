import { createBrowserRouter } from "react-router";
import Books from "./components/books/Books";
import AddBook from "./components/books/AddBook";
import MainLayout from "./components/layout/MainLayout";
import App from "./App";
import BookDetailsCard from "./components/books/BookCardDetails";
import Borrow from "./components/borrow/Borrow";
import EditBook from "./components/books/EditBook";
import NotFound from "./components/not found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetailsCard />,
      },
      {
        path: "/borrow",
        element: <Borrow />,
      },
      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
