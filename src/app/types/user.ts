import { Role } from "./Role";
import { Organizer } from "./Organizer";
import { ReferralCoupon } from "./ReferralCoupon";
import { PointDetail } from "./PointDetail";
import { Transaction } from "./Transaction";

export interface User {
  id: number;
  referralNumber: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
  role: Role;
  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  organizer?: Organizer;
  referralCoupon: ReferralCoupon[];
  pointDetails: PointDetail[];
  transactions: Transaction[];
}
