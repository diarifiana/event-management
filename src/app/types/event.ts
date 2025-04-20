import Organizer from "./organizer";
import Ticket from "./ticket";

export default interface Event {
  id: number;
  categoryId: number;
  organizerId: number;
  organizer: Organizer[];
  slug: string;
  name: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  tickets: Ticket[];
}
