import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Borrow = {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
  quantity: number;
  dueDate: string;
};

type BorrowCardProps = {
  borrow: Borrow;
};

const BorrowCard = ({ borrow }: BorrowCardProps) => {
  console.log(borrow);
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          {borrow.book.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          ISBN: {borrow.book.isbn}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">Quantity: {borrow.totalQuantity}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BorrowCard;
