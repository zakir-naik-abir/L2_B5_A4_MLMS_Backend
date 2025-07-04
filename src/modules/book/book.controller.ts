import { Request, Response } from "express";
import { BookService } from "./book.service";

// create book
const createBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.addBook(req.body);

    res.status(201).json({
      success: true,
      message: "Book created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error,
    });
  }
};

// get all book
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getBooks();

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
      error,
    });
  }
};

// get book byId
const getBookById = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getSingleBook(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to retrieve book",
      error,
    });
  }
};

// update book
const updateBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.updateSingleBook(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to update book",
      error,
    });
  }
};

// delete book
const deleteBook = async (req: Request, res: Response) => {
  try {
    await BookService.deleteSingleBook(req.params.id);

    res.status(200).json({
      success: true,
      message: "Book deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to delete book",
      error,
    });
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
