import { Router } from "express";
import { BookController } from "./book.controller";

const bookRoute = Router();

bookRoute.post("/create-book", BookController.createBook);
bookRoute.get("/books", BookController.getAllBooks);
bookRoute.get("/book/:id", BookController.getBookById);
bookRoute.patch("/edit-book/:id", BookController.updateBook);
bookRoute.delete("/delete/:id", BookController.deleteBook);

export default bookRoute;
