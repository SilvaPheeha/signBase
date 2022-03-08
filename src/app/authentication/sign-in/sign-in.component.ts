import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ShareService } from 'src/app/shared/share.service';
import { getError, getSignInCredentials } from '../authentication-state';
import { authAppActions } from '../authentication-state/actions';
import { AuthenticationState } from '../authentication-state/state.reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public signInForm!: FormGroup;
  public isPasswordType = true;
  public displayMessage: any = {};
  public getCredentials$!: Observable<any>;
  public getError$!: Observable<any>;
  constructor(private formBuider: FormBuilder, private store: Store<AuthenticationState>, private sharedService: ShareService) { }

  ngOnInit(): void {
    this.getCredentials$ = this.store.select(getSignInCredentials);
    this.getError$ = this.store.select(getError).pipe(map(err => err && err.page === 'SignIn' ? err : null ));
    this.getCredentials$ .subscribe(c => c ? this.signInForm.reset(): null);
    this.signInForm = this.form();
    this.signInForm.valueChanges.pipe(delay(1000)).subscribe(
      () => this.displayMessage = this.sharedService.processMessages(this.signInForm)
    );
  }

  form(): FormGroup{
    return this.formBuider.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }

  signIn(){
    this.store.dispatch(authAppActions.signIn({email: this.signInForm.get('email')?.value, password: this.signInForm.get('password')?.value}));
  }

  togglePasswordType = () => this.isPasswordType = !this.isPasswordType;

}
