import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupEmailComponent} from './signup-email/signup-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'email',
    pathMatch: 'full'
  },
  {
    path: 'email',
    component: SignupEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
