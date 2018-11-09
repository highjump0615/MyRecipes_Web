import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnboardComponent} from './page/onboard/onboard.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
