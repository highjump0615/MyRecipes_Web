import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupEmailComponent } from './signup-email/signup-email.component';
import {CheckBoxComponent} from '../../components/check-box/check-box.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupEmailComponent,
    CheckBoxComponent
  ]
})
export class SignupModule { }
