import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupEmailComponent} from './signup-email/signup-email.component';
import {SignupPasswordComponent} from './signup-password/signup-password.component';
import {SignupProfileComponent} from './signup-profile/signup-profile.component';
import {SignupAllergiesComponent} from './signup-allergies/signup-allergies.component';
import {SignupFavouriteComponent} from './signup-favourite/signup-favourite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'email',
    pathMatch: 'full'
  },
  {
    path: 'email',
    component: SignupEmailComponent
  },
  {
    path: 'password',
    component: SignupPasswordComponent
  },
  {
    path: 'profile',
    component: SignupProfileComponent
  },
  {
    path: 'favourite',
    component: SignupFavouriteComponent
  },
  {
    path: 'allergy',
    component: SignupAllergiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
