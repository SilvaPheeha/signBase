import { createAction, props } from '@ngrx/store';

export const signInSuccess = createAction(
    '[AUTH API] Sign In Success',
    props<{credetials: any}>()
);

export const signInFailure = createAction(
    '[AUTH API] Sign In Failure',
    props<{error: any}>()
);


export const signUpSuccess = createAction(
    '[AUTH API] Sign In Success',
    props<{credetials: any}>()
);

export const signUpFailure = createAction(
    '[AUTH API] Sign In Failure',
    props<{error: any}>()
);
