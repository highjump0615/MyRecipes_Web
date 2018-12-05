import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnboardComponent} from './page/onboard/onboard.component';
import {PageComponent} from './page/page.component';

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
  },
  {
    path: 'forget',
    loadChildren: './page/forget/forget.module#ForgetModule'
  },
  {
    path: 'signup',
    loadChildren: './page/signup/signup.module#SignupModule'
  },
  {
    path: 'home',
    component: PageComponent,
    loadChildren: './page/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
