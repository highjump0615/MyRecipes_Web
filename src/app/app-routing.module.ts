import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnboardComponent} from './page/onboard/onboard.component';
import {PageComponent} from './page/page.component';
import {AuthGuard} from './guards/auth.guard';
import {AppComponent} from './app.component';
import {RecipeDetailResolver} from './page/recipe-detail/recipe-detail.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'onboard',
    loadChildren: './page/onboard/onboard.module#OnboardModule'
  },
  {
    path: 'login',
    loadChildren: './page/signin/signin.module#SigninModule',
    canActivate: [AuthGuard],
    data: {path: 'login'}
  },
  {
    path: 'forget',
    loadChildren: './page/forget/forget.module#ForgetModule'
  },
  {
    path: 'signup',
    loadChildren: './page/signup/signup.module#SignupModule',
  },
  {
    path: 'home',
    component: PageComponent,
    loadChildren: './page/home/home.module#HomeModule',
    canActivate: [AuthGuard],
    data: {path: 'home'}
  },
  {
    path: 'preference',
    component: PageComponent,
    loadChildren: './page/preference/preference.module#PreferenceModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'setting',
    component: PageComponent,
    loadChildren: './page/setting/setting.module#SettingModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cooking-tip',
    component: PageComponent,
    loadChildren: './page/cooking-tip/cooking-tip.module#CookingTipModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'all',
    component: PageComponent,
    loadChildren: './page/all/all.module#AllModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: PageComponent,
    loadChildren: './page/about/about.module#AboutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: PageComponent,
    loadChildren: './page/profile-edit/profile-edit.module#ProfileEditModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'favorite',
    component: PageComponent,
    loadChildren: './page/favourite/favourite.module#FavouriteModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'myrecipes',
    component: PageComponent,
    loadChildren: './page/myrecipe/myrecipe.module#MyrecipeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe/:id',
    component: PageComponent,
    loadChildren: './page/recipe-detail/recipe-detail.module#RecipeDetailModule',
    canActivate: [AuthGuard],
    resolve: {
      recipeDetail: RecipeDetailResolver
    }
  },
  {
    path: 'reviews',
    component: PageComponent,
    loadChildren: './page/reviews/reviews.module#ReviewsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'new/recipe',
    component: PageComponent,
    loadChildren: './page/recipe-create/recipe-create.module#RecipeCreateModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'menu/new',
    component: PageComponent,
    loadChildren: './page/menu-create/menu-create.module#MenuCreateModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping/new',
    component: PageComponent,
    loadChildren: './page/shopping-create/shopping-create.module#ShoppingCreateModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'tip/new',
    component: PageComponent,
    loadChildren: './page/tip-create/tip-create.module#TipCreateModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    loadChildren: './page/signin/signin.module#SigninModule',
    canActivate: [AuthGuard],
    data: {path: 'logout'}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
