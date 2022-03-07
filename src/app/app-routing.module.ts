import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'signup', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
