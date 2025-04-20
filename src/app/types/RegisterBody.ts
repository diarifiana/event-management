// types/register.ts
export interface RegisterBody {
  body: {
    fullName: string;
    email: string;
    userName: string;
    password: string;
  };
  referralNumber?: string;
  organizerData?: {
    name: string;
  };
}
