import { PostDetails } from "../../models/post-details.model";
import { Post } from "../../models/post.model";

export interface BlogState {
  posts: Post[];
  postDetails: PostDetails | null;
  error : string;
}

export const initialState: BlogState = {
  posts: [],
  postDetails: null,
  error: ''
};