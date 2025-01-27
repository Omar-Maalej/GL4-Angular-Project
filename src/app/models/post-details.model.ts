import { Comment } from "./comment.model";
import { Like } from "./like.model";
import { SampleUser } from "./sample-user.model";

export interface PostDetails {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    comments: Comment[];
    likes: Like[];
    images: Array<{ id: number, image: string }>;
    user : SampleUser;
  }
  