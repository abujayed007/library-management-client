export interface IBorrow {
  book: {
    title: string;
    isbn: string;
  };
  quantity: number;
  dueDate: Date;
}

export interface CIBorrow {
  book: string;
  quantity: number;
  dueDate: Date;
}
