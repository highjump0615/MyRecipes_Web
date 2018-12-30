import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import {SigninComponent} from './signin.component';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class SigninModule { }
