import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true },
  genre: { type: String, required: true, enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ], },
  isbn: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  copies: { type: Number, required: true, min: 0 },
  availableCopies: { type: Boolean, required: true, default: true }
},
{ timestamps: true, versionKey: false });

bookSchema.methods.updateAvailability = function(){
  this.available = this.copies > 0;
};

bookSchema.pre("save", function(next){
  this.updateAvailability();
  next();
});

export const Book = model<IBook>('Book', bookSchema);