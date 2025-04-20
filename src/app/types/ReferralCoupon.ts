import { Transaction } from "./Transaction";
import { User } from "./User";

export interface ReferralCoupon {
  id: number;
  userId: number;
  user: User;
  referralCoupon: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  expiredAt: Date;
  isClaimed: boolean;
  isDeleted: boolean;
  transaction: Transaction[];
}
