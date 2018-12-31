import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './page/page.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMenuItemComponent } from './components/sidebar/sidebar-menu-item/sidebar-menu-item.component';
import {AuthGuard} from './guards/auth.guard';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {SpinnerOverlayService} from './services/spinner-overlay.service';
import {SpinnerOverlayComponent} from './components/spinner-overlay/spinner-overlay.component';
import {MatProgressSpinnerModule} from '@angular/material';
import { BaseComponent } from './page/base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageTopComponent,
    SidebarComponent,
    SidebarMenuItemComponent,
    SpinnerOverlayComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    OverlayModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    SpinnerOverlayService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SpinnerOverlayComponent
  ]
})
export class AppModule { }
