import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupEmailComponent } from './signup-email/signup-email.component';
import {CheckBoxComponent} from '../../components/check-box/check-box.component';
import { SignupPasswordComponent } from './signup-password/signup-password.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupEmailComponent,
    CheckBoxComponent,
    SignupPasswordComponent
  ]
})
export class SignupModule { }
