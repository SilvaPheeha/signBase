import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthenticationShellComponent } from './authentication-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationShellComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent,
      },
      { path: '', redirectTo: '/signin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationShellRoutingModule { }
