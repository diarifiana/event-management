import { Event } from "./event";
import { User } from "./user";

export interface Organizer {
  id: number;
  userId: number;
  user: User;
  name: string;
  aboutUs?: string;
  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  events: Event[];
}
