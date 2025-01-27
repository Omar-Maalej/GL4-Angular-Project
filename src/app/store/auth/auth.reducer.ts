import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { authInitialState } from './auth.state';



export const authReducer = createReducer(authInitialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { user }) => ({ ...state, user, isErrored: false, isLoading: false, isLoggedIn: true })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isErrored: true, isLoading: false, isLoggedIn: false }))
);

