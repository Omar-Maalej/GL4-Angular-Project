import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth/auth.reducer';
import { blogReducer } from './blog/blog.reducer';
import { adminBlogReducer } from './admin/blog/blog.reducer';

export interface AppState {
  auth: ReturnType<typeof authReducer>;
  blog: ReturnType<typeof blogReducer>;
  adminBlog: ReturnType<typeof adminBlogReducer>;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  blog: blogReducer,
  adminBlog: adminBlogReducer,
};
