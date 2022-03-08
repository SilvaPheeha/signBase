import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationShellRoutingModule } from './authentication-shell-routing.module';
import { AuthenticationShellComponent } from './authentication-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


@NgModule({
  declarations: [
    AuthenticationShellComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationShellRoutingModule,
    SharedModule
  ]
})
export class AuthenticationShellModule { }
