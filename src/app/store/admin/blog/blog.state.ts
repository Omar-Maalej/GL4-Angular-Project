import { PostDetails } from "../../../models/post-details.model";
import { Post } from "../../../models/post.model";

export interface AdminBlogState {
    posts: Post[];
    postDetails: PostDetails | null;
    error : string;
}

export const initialState: AdminBlogState = {
    posts: [],
    postDetails: null,
    error: ''
};