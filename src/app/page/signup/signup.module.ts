import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupEmailComponent } from './signup-email/signup-email.component';
import {CheckBoxComponent} from '../../components/check-box/check-box.component';
import { SignupPasswordComponent } from './signup-password/signup-password.component';
import { SignupProfileComponent } from './signup-profile/signup-profile.component';
import { SignupAllergiesComponent } from './signup-allergies/signup-allergies.component';
import { SignupFavouriteComponent } from './signup-favourite/signup-favourite.component';
import { SignupDislikeComponent } from './signup-dislike/signup-dislike.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SignupEmailComponent,
    CheckBoxComponent,
    SignupPasswordComponent,
    SignupProfileComponent,
    SignupAllergiesComponent,
    SignupFavouriteComponent,
    SignupDislikeComponent
  ]
})
export class SignupModule { }
