import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthenticationState } from "./state.reducer";

const getAuthenticationFeatureState = createFeatureSelector<AuthenticationState>('authentication');

export const getSignInCredentials = createSelector(
    getAuthenticationFeatureState,
    state => state.signInCredetials
);

export const getSignUpCredentials = createSelector(
    getAuthenticationFeatureState,
    state => state.signUpCredetials
);

export const getError = createSelector(
    getAuthenticationFeatureState,
    state => state.error
);