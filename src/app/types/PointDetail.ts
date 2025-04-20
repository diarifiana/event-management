import { User } from "./User";

export interface PointDetail {
  id: number;
  userId: number;
  user: User;
  amount: number;
  expiredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
