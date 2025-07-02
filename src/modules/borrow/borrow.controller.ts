import { NextFunction, Request, Response } from "express";
import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";
import { title } from "process";

// borrow book
const borrowBook = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const { book: bookId, quantity } = req.body;
    const book = await Book.findById(bookId);

    if(!book || book.copies < quantity){
      return res.send({
        success: false,
        message: "Unavailable Book"
      });
    };
    const borrow = await Borrow.create(req.body);

    res.send({
      success: true,
      message: "Book borrowed successfully",
      borrow,
    })
  } catch (error) {
    next(error);
  }
};

// borrow book summary
const getBorrowSummary = async(req: Request, res: Response) =>{
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        }
      },
      {
        $project: {
          _id: 0,
          book: { title: "$book.title", isbn: "$book.isbn" },
          totalQuantity: 1,
        }
      },
    ]);

    res.send({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      summary,
    })
  } catch (error) {
    res.send({
      success: true,
      message: "Error",
      error,
    });
  }
}

export const borrowController = { borrowBook, getBorrowSummary }