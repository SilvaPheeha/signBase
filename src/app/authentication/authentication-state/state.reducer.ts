import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import { authApiActions, authAppActions } from './actions';

export interface AuthenticationState {
  credetials: any
  error: any
};

const initialAuthenticationState: AuthenticationState = {
    credetials: null,
    error: null
};

export const _reducer = createReducer(
  initialAuthenticationState,
  on(authApiActions.signInSuccess, (state, action) => {
    return {...state, credetials: action.credetials}
  }),
  on(authApiActions.signUpSuccess, (state, action) => {
    return {...state, credetials: action.credetials}
  }),
  on(authApiActions.signInFailure, (state, action) => {
    return {...state, error: action.error}
  }),
  on(authApiActions.signUpFailure, (state, action) => {
    return {...state, error: action.error}
  }),
);

export function reducer(state: AuthenticationState | undefined, action: Action) {
  return _reducer(state, action);
}