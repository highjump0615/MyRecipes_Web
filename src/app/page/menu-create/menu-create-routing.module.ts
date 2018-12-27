import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuCreateComponent} from './menu-create.component';
import {AutoComponent} from './auto/auto.component';
import {ManualComponent} from './manual/manual.component';

const routes: Routes = [
  {
    path: '',
    component: MenuCreateComponent,
    children: [
      {
        path: '',
        redirectTo: 'auto'
      },
      {
        path: 'auto',
        component: AutoComponent
      },
      {
        path: 'manual',
        component: ManualComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCreateRoutingModule { }
