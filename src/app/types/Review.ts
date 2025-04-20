import { Transaction } from "./Transaction";
import { Rating } from "./Rating";

export interface Review {
  id: number;
  transactionId: number;
  transaction: Transaction;
  review: string;
  rating: Rating;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
