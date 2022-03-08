import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import { authApiActions, authAppActions } from './actions';

export interface AuthenticationState {
  signInCredetials: any
  signUpCredetials: any
  error: any
};

const initialAuthenticationState: AuthenticationState = {
  signInCredetials: null,
  signUpCredetials: null,
  error: null
};

// TODO Needs Refactor
export const _reducer = createReducer(
  initialAuthenticationState,
  on(authApiActions.signInSuccess, (state, action) => {
    return { ...state, signInCredetials: action.credetials }
  }),
  on(authApiActions.signUpSuccess, (state, action) => {
    return { ...state, signUpCredetials: action.credetials }
  }),
  on(authApiActions.signInFailure, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(authApiActions.signUpFailure, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(authApiActions.forgotPasswordFailture, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(authAppActions.clearErrors, (state,) => {
    return { ...state, error: null }
  }),
);

export function reducer(state: AuthenticationState | undefined, action: Action) {
  return _reducer(state, action);
}