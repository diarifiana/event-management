export default interface Category {
  id: number;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
