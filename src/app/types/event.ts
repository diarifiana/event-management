export default interface Event {
  id: number;
  categoryId: number;
  organizerId: number;
  slug: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
