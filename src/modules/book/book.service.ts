import { IBook } from "./book.interface";
import { Book } from "./book.model";

const addBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};

const getBooks = async (): Promise<IBook[]> => {
  const result = await Book.find({});
  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateSingleBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  if (payload.copies !== undefined && payload.copies === 0) {
    payload.available = false;
  } else if (payload.copies !== undefined && payload.copies > 0) {
    payload.available = true;
  }
  const result = await Book.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  addBook,
  getBooks,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
