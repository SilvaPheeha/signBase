import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationShellService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password))
  }
  
  signUp(email: string, password: string) {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password));
  }

  forgotPassword(email: string) {
    return from(this.angularFireAuth.sendPasswordResetEmail(email));
  }
}
