import { Category } from "./Category";
import { Organizer } from "./Organizer";
import { Voucher } from "./Voucher";
import { Ticket } from "./Ticket";
import { Location } from "./Location";

export interface Event {
  id: number;
  categoryId: number;
  category: Category;
  organizerId: number;
  organizer: Organizer;
  slug: string;
  name: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  location: Location;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  vouchers: Voucher[];
  tickets: Ticket[];
}
