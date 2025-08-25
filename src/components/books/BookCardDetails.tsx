import { Link, useNavigate, useParams } from "react-router";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "@/redux/api/baseApi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import AddBorrowBook from "../borrow/AddBorrowBook";

const BookDetailsCard = () => {
  const [open, setOpen] = useState(false);
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data: book, error, isLoading } = useGetSingleBookQuery(id as string);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading book details...</div>;
  if (error) return <div>Error loading book details</div>;
  if (!book) return <div>Book not found</div>;

  const handleDelete = async () => {
    if (!id) {
      toast.warning("Invalid book ID");
      return;
    }
    try {
      await deleteBook(id).unwrap();
      toast.success("Book Deleted Successfully");
      setOpen(false);
      navigate("/");
    } catch {
      toast.warning("Failed to delete book");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Card className="overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-indigo-700">
                {book.data.title}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm">
                {book.data.description
                  ? book.data.description
                  : "No description available"}
              </CardDescription>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                book.data.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {book.data.available ? "Available" : "Unavailable"}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <span>
              <span className="font-semibold">Genre:</span> {book.data.genre}
            </span>
            <span>
              <span className="font-semibold">ISBN:</span> {book.data.isbn}
            </span>
          </div>
        </CardContent>

        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>
              <span className="font-semibold">Copies:</span> {book.data.copies}
            </p>
            <p className="italic">
              {book.data.copies > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center pt-4 border-t border-gray-200 gap-5">
          <div>
            <AddBorrowBook book={book.data} />
          </div>
          <div>
            <Button asChild variant="outline" size="sm" className="rounded">
              <Link to={`/edit-book/${book?.data?._id}`}>Edit</Link>
            </Button>
          </div>
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
                Are you sure you want to delete <b>{book.title}</b>? This action
                cannot be undone.
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookDetailsCard;
