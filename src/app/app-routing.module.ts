import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnboardComponent} from './page/onboard/onboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
  },
  {
    path: 'onboard',
    loadChildren: './page/onboard/onboard.module#OnboardModule'
  },
  {
    path: 'login',
    loadChildren: './page/signin/signin.module#SigninModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
