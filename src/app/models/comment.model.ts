import { SampleUser } from "./sample-user.model";

export interface Comment {
  id: number;
  post: number;
  user: SampleUser;
  content: string;
  created_at: string;
  updated_at: string;
}
