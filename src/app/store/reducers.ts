import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth/auth.reducer';

export interface AppState {
  auth: ReturnType<typeof authReducer>;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
