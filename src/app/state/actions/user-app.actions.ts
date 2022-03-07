import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const currentUser = createAction(
    '[USER APP] Current User',
    props<{User: User}>()
);
