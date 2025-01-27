import { Comment } from "./comment.model";
import { Like } from "./like.model";

export interface PostDetails {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    comments: Comment[];
    likes: Like[];
    images: Array<{ id: number, image: string }>;
    user : {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
    }
  }
  