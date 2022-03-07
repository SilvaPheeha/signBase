import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { userAppActions } from './actions';

export interface State {
     user: User
};

const initialState: State = {
    user: {}
};

export const _reducer = createReducer(
  initialState,
  on(userAppActions.currentUser, (state, action) => {
    return {...state, user: action.User}
  },
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}