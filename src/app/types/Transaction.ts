import { ReferralCoupon } from "./ReferralCoupon";
import { Voucher } from "./Voucher";
import { Status } from "./Status";
import { User } from "./User";
import { Ticket } from "./Ticket";
import { Review } from "./Review";

export interface Transaction {
  id: number;
  uuid: string;
  userId: number;
  user: User;
  ticketId: number;
  ticket: Ticket;
  referralCouponCode: string;
  voucherCode: string;
  qty: number;
  totalAmount: number;
  status: Status;
  usePoints: boolean;
  paymentProof?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  review: Review[];
  referralCoupon?: ReferralCoupon;
  referralCouponId?: number;
  voucher?: Voucher;
  voucherId?: number;
}
