import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay, map, Observable } from 'rxjs';
import { ShareService } from 'src/app/shared/share.service';
import { getError } from '../authentication-state';
import { authAppActions } from '../authentication-state/actions';
import { AuthenticationState } from '../authentication-state/state.reducer';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public fgForm!: FormGroup;
  public displayMessage: any = {};
  public isEmailSent = false;
  public getError$!: Observable<any>;
  constructor(private formBuider: FormBuilder, private store: Store<AuthenticationState>, private sharedService: ShareService) { }

  ngOnInit(): void {
    this.fgForm = this.form();
    this.getError$ = this.store.select(getError).pipe(map(err => err && err.page === 'ForgotPassword' ? err : null ));
    this.fgForm.valueChanges.pipe(delay(1000)).subscribe(
      () => this.displayMessage = this.sharedService.processMessages(this.fgForm)
    );
  }

  form(): FormGroup{
    return this.formBuider.group({
      email: ['', Validators.required],
    })
  };

  submit(){
    this.store.dispatch(authAppActions.forgotPassword({email: this.fgForm.get('email')?.value }));
    this.fgForm.reset();
  }
}