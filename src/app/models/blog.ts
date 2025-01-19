import { User } from "./user";

export interface Blog {
  title: string;
  author: User;
  content: string;
  image: string;
  comments: Comment[];
}
