import { Book } from "../book/book.model";
import { IBorrow } from "./borrow.interface";
import { Borrow } from "./borrow.model";

const borrowBook = async (payload: IBorrow): Promise<IBorrow> => {
  const { book: bookId, quantity } = payload;
  const book = await Book.findById(bookId);

  if (!book) throw new Error("Book not found!");
  if (book.copies < quantity)
    throw new Error("Not enough copies available now!");

  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
  const result = await Borrow.create(payload );
  return result;
};

const getBorrowSummary = async () => {
  const result = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantityBorrowed: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    {
      $unwind: "$bookDetails",
    },
    {
      $project: {
        _id: 0,
        bookTitle: "$bookDetails",
        totalQuantityBorrowed: 1,
      },
    },
  ]);
  return result;
};

export const BorrowService = { borrowBook, getBorrowSummary };
