import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth/auth.reducer';
import { blogReducer } from './blog/blog.reducer';

export interface AppState {
  auth: ReturnType<typeof authReducer>;
  blog: ReturnType<typeof blogReducer>;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  blog: blogReducer,
};
