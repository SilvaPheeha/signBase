import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
    '[USER API] login Success',
    props<{credetials: any}>()
);

export const loginFailure = createAction(
    '[USER API] login Failure',
    props<{error: any}>()
);
