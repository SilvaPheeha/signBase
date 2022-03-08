import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const signIn = createAction(
    '[AUTH APP] Sign In User',
    props<{email: string, password: string}>()
);

export const signUp = createAction(
    '[AUTH APP] Sign Up User',
    props<{email: string, password: string}>()
);
