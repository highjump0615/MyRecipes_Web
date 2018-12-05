import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './page/page.component';
import { PageTopComponent } from './components/page-top/page-top.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
