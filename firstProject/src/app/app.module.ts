import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadService } from './header/header.service'
import { Header } from './header/head.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
