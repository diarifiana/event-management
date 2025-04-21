import { Organizer } from "./Organizer";
import { PointDetail } from "./PointDetail";
import { ReferralCoupon } from "./ReferralCoupon";
import { Role } from "./Role";
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
