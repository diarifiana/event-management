import { Event } from "./event";

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  events: Event[];
}
