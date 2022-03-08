import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthenticationState } from "./state.reducer";

const getAuthenticationFeatureState = createFeatureSelector<AuthenticationState>('authentication');

export const getCredentials = createSelector(
    getAuthenticationFeatureState,
    state => state.credetials
);