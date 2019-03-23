import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';
import {ComponentsModule} from '../../components/components.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileEditRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [ProfileEditComponent]
})
export class ProfileEditModule { }
