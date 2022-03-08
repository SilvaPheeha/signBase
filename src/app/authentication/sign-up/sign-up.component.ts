import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay, map, Observable } from 'rxjs';
import { ShareService } from 'src/app/shared/share.service';
import { ConfirmValidators } from 'src/app/shared/validators';
import { getError, getSignUpCredentials } from '../authentication-state';
import { authAppActions } from '../authentication-state/actions';
import { AuthenticationState } from '../authentication-state/state.reducer';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public signUpForm!: FormGroup;
  public isPasswordType = true;
  public displayMessage: any = {};
  public getCredentials$!: Observable<any>;
  public getError$!: Observable<any>;
  constructor(private formBuider: FormBuilder, private store: Store<AuthenticationState>, 
    private sharedService: ShareService) { }

  ngOnInit(): void {
    this.getCredentials$ = this.store.select(getSignUpCredentials);
    this.getError$ = this.store.select(getError).pipe(map(err => err && err.page === 'SignUp' ? err : null ));
    this.getCredentials$ .subscribe(c => c ? this.signUpForm.reset(): null);
    this.signUpForm = this.form();
    this.signUpForm.valueChanges.pipe(delay(1000)).subscribe(
      () => this.displayMessage = this.sharedService.processMessages(this.signUpForm)
    );
  }

  form(): FormGroup{
    return this.formBuider.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, ConfirmValidators.confirm('password')]],
    })
  }

  signUp(){
    this.store.dispatch(authAppActions.signUp({email: this.signUpForm.get('email')?.value, password: this.signUpForm.get('password')?.value}));
  }

  togglePasswordType = () => this.isPasswordType = !this.isPasswordType;

}

