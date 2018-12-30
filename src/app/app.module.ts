import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './page/page.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMenuItemComponent } from './components/sidebar/sidebar-menu-item/sidebar-menu-item.component';
import {AuthGuard} from './guards/auth.guard';
import {SESSION_STORAGE, StorageServiceModule} from 'ngx-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageTopComponent,
    SidebarComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
