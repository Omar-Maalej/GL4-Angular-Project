import { User } from "./user";

export interface Blog {
  id: number;
  title: string;
  author?: User;
  date: string;
  description: string;
  content?: string;
  image?: string;
  comments?: Comment[];
}
