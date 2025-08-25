import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import type { Genre } from "@/types/bookType";
import AddBorrowBook from "../borrow/AddBorrowBook";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface Book {
  _id: string;
  title: string;
  author: string;
  description?: string;
  available: boolean;
  genre: Genre;
  isbn: string;
  copies: number;
}

export interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteBook(book._id).unwrap();
      toast.success("Book Deleted Successfully");
      setOpen(false);
      navigate("/");
    } catch {
      toast.warning("Failed to delete book");
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     await deleteBook(book._id).unwrap();
  //     toast.success("Book Deleted Successfully");
  //     navigate("/");
  //   } catch {
  //     toast.warning("Failed to delete book");
  //   }
  // };
  return (
    <div className="p-4">
      <Card
        onClick={() => navigate(`/books/${book._id}`)}
        className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 cursor-pointer"
      >
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-indigo-700">
                {book.title}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm">
                {book.description
                  ? book.description.split(" ").slice(0, 30).join(" ") +
                    (book.description.split(" ").length > 30 ? "..." : "")
                  : "No description available"}
              </CardDescription>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                book.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {book.available ? "Available" : "Unavailable"}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span className="flex items-center gap-1">
              <span className="font-semibold">Genre:</span> {book.genre}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">ISBN:</span> {book.isbn}
            </span>
          </div>
        </CardContent>

        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>
              <span className="font-semibold">Copies:</span> {book.copies}
            </p>
            <p className="italic">
              {book.copies > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </CardContent>

        <CardFooter
          className="flex items-center justify-between pt-4 border-t border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2">
            <div>
              <AddBorrowBook book={book} />
            </div>
            <div>
              <Button asChild variant="outline" size="sm" className="rounded">
                <Link to={`/edit-book/${book._id}`}>Edit</Link>
              </Button>
            </div>

            <Link to={`/books/${book._id}`}>
              <Button
                variant="secondary"
                size="sm"
                className="rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              >
                Details
              </Button>
            </Link>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="rounded flex items-center gap-1 shadow-md"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Delete</DialogTitle>
                </DialogHeader>
                <p>
                  Are you sure you want to delete <b>{book.title}</b>? This
                  action cannot be undone.
                </p>
                <DialogFooter className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="rounded"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDelete}
                    className="rounded"
                  >
                    Yes, Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
