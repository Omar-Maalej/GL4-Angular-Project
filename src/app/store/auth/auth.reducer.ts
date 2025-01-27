import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { authInitialState } from './auth.state';



export const authReducer = createReducer(authInitialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { user }) => {
    localStorage.setItem('access_token', user?.access); 
    localStorage.setItem('refresh_token', user?.refresh);
    return { ...state, user, isErrored: false, isLoading: false, isLoggedIn: true };
  }),
  on(loginFailure, (state, { error }) => ({ ...state, error, isErrored: true, isLoading: false, isLoggedIn: false })),
  on(logout, (state) => {

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return { ...state, user: null, isErrored: false, isLoading: false, isLoggedIn: false };
  }),
);

