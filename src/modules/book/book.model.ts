import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, required: true, default: true },
  },
  { timestamps: true, versionKey: false }
);

bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

export const Book = model<IBook>("Book", bookSchema);
