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
  },
  {
    path: 'preference',
    component: PageComponent,
    loadChildren: './page/preference/preference.module#PreferenceModule'
  },
  {
    path: 'setting',
    component: PageComponent,
    loadChildren: './page/setting/setting.module#SettingModule'
  },
  {
    path: 'cooking-tip',
    component: PageComponent,
    loadChildren: './page/cooking-tip/cooking-tip.module#CookingTipModule'
  },
  {
    path: 'all',
    component: PageComponent,
    loadChildren: './page/all/all.module#AllModule'
  },
  {
    path: 'about',
    component: PageComponent,
    loadChildren: './page/about/about.module#AboutModule'
  },
  {
    path: 'profile',
    component: PageComponent,
    loadChildren: './page/profile-edit/profile-edit.module#ProfileEditModule'
  },
  {
    path: 'favorite',
    component: PageComponent,
    loadChildren: './page/favourite/favourite.module#FavouriteModule'
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
