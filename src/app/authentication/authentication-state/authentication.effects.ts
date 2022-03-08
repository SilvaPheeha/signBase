import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthenticationShellService } from '../authentication-shell/authentication-shell.service';
import { authApiActions, authAppActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationEffects {
    constructor(private actions$: Actions, private authenticationService: AuthenticationShellService) {}

    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(authAppActions.signIn),
        mergeMap((action) => this.authenticationService.signIn(action.email, action.password)
        .pipe(
            map(res => authApiActions.signInSuccess({ credetials: res})),
            catchError((error) => of(authApiActions.signInFailure({error: this.authenticationService.errorHandler(error, 'SignIn')})))
          ))
        )
      )

      forgotPassword$ = createEffect(() => this.actions$.pipe(
        ofType(authAppActions.forgotPassword),
        mergeMap((action) => this.authenticationService.forgotPassword(action.email)
        .pipe(
            map(res => authApiActions.forgotPasswordSuccess()),
            catchError((error) => of(authApiActions.forgotPasswordFailture({error: this.authenticationService.errorHandler(error, 'ForgotPassword')})))
          ))
        )
      )

      signUp$ = createEffect(() => this.actions$.pipe(
        ofType(authAppActions.signUp),
        mergeMap((action) => this.authenticationService.signUp(action.email, action.password)
        .pipe(
            map(res => authApiActions.signUpSuccess({ credetials: res})),
            catchError((error) => of(authApiActions.signUpFailure({error: this.authenticationService.errorHandler(error, 'SignUp')})))
          ))
        )
      )
}
