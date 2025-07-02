import { RequestHandler, Router } from "express";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/borrow", borrowController.borrowBook as RequestHandler);
borrowRoute.get("/borrow", borrowController.getBorrowSummary as RequestHandler);

export default borrowRoute;