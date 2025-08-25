import { useGetAllBorrowQuery } from "@/redux/api/baseApi";
import BorrowCard from "./BorrowCard";

const Borrow = () => {
  const { data, isLoading } = useGetAllBorrowQuery(undefined);
  console.log(data);

  if (isLoading) return <p>Loading borrows...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {!isLoading &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((borrow: any) => {
          return <BorrowCard key={borrow.book.isbn} borrow={borrow} />;
        })}
    </div>
  );
};

export default Borrow;
