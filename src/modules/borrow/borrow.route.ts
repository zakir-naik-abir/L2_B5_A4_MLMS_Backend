import { RequestHandler, Router } from "express";
import { BorrowController } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/borrow", BorrowController.borrowBook as RequestHandler);
borrowRoute.get(
  "/borrow-summary",
  BorrowController.getBorrowSummary as RequestHandler
);

export default borrowRoute;
