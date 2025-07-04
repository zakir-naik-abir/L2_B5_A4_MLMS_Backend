import { NextFunction, Request, Response } from "express";
import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";
import { title } from "process";
import { BorrowService } from "./borrow.service";

// borrow book
const borrowBook = async (req: Request, res: Response) => {
  try {
    // const { book: bookId, quantity } = req.body;
    // const book = await Book.findById(bookId);

    // if(!book || book.copies < quantity){
    //   return res.send({
    //     success: false,
    //     message: "Unavailable Book"
    //   });
    // };

    // const borrow = await Borrow.create(req.body);

    const result = await BorrowService.borrowBook(req.body);

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed borrow book",
    });
  }
};

// borrow book summary
const getBorrowSummary = async (req: Request, res: Response) => {
  try {
    const result = await BorrowService.getBorrowSummary();

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to retrieve summary",
      error,
    });
  }
};

export const BorrowController = { borrowBook, getBorrowSummary };
