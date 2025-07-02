import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute = Router();

bookRoute.post('/create-book', bookController.createBook);
bookRoute.get('/books', bookController.getAllBook);
bookRoute.get('/book/:bookId', bookController.getBookById);
bookRoute.patch('/book/:bookId', bookController.updateBook);
bookRoute.delete('/book/:bookId', bookController.deleteBook);


export default bookRoute;