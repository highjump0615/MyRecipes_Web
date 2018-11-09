import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OwlcarouselDirective } from './directives/owlcarousel.directive';
import {AppRoutingModule} from './app-routing.module';
import { OnboardComponent } from './page/onboard/onboard.component';


@NgModule({
  declarations: [
    AppComponent,
    OwlcarouselDirective,
    OnboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
