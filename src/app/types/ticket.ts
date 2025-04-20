import { Event } from "./event";
import { Transaction } from "./Transaction";

export interface Ticket {
  id: number;
  eventId: number;
  event: Event;
  ticketType: string;
  price: number;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  transactions: Transaction[];
}
