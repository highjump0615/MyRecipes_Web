import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpandMenuComponent} from './expand-menu/expand-menu.component';
import {ExpandMenuItemComponent} from './expand-menu/expand-menu-item/expand-menu-item.component';
import {CuisineItemComponent} from './cuisine-item/cuisine-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeRowCardComponent } from './recipe-row-card/recipe-row-card.component';
import {StarRateComponent} from './star-rate/star-rate.component';
import {RecipeGridCardComponent} from './recipe-grid-card/recipe-grid-card.component';
import { HscrollContainerComponent } from './hscroll-container/hscroll-container.component';
import {RouterModule} from '@angular/router';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';

const COMPONENTS = [
  ExpandMenuComponent,
  ExpandMenuItemComponent,
  CuisineItemComponent,
  SearchBarComponent,
  RecipeRowCardComponent,
  RecipeGridCardComponent,
  StarRateComponent,
  HscrollContainerComponent,
  ImageUploaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
