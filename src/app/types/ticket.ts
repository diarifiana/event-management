export default interface Ticket {
  id: number;
  eventId: number;
  ticketType: string;
  price: number;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
