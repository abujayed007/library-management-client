import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import BookCard from "./BookCard";

const Books = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  console.log({ data, isLoading, isError });

  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {!isLoading &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((book: any) => <BookCard key={book.isbn} book={book} />)}
    </div>
  );
};

export default Books;
