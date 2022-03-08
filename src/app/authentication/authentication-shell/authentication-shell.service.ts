import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, throwError } from 'rxjs';
import { errorCodes } from 'src/app/shared/firebase-error.codes';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationShellService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password))
    .pipe(catchError(error => throwError(() => error)))
  }
  
  signUp(email: string, password: string) {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password))
    .pipe(catchError(error => throwError(() => error)));
  }

  forgotPassword(email: string) {
    return from(this.angularFireAuth.sendPasswordResetEmail(email))
    .pipe(catchError(error => throwError(() => error)));
  }

  errorHandler(error: any, from: string) {
    if(error.code && typeof error.code === 'string'){
      const codes = errorCodes[error.code];
      if(!!codes){
        return {
          header: codes.header,
          message: codes.message,
          page: from
        }
      }
    }
    return null;
  }
}
