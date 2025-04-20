export default interface User {
  id: number;
  referralNumber: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
