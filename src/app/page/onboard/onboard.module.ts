import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import {OnboardComponent} from './onboard.component';
import {OwlcarouselDirective} from '../../directives/owlcarousel.directive';

@NgModule({
  imports: [
    CommonModule,
    OnboardRoutingModule
  ],
  declarations: [
    OnboardComponent,
    OwlcarouselDirective
  ]
})
export class OnboardModule { }
