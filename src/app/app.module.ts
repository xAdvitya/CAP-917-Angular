import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Header } from './header/head.component';
import { HeadService } from './header/header.service';
import { TestComponent } from './test/test.component';
import {
  IoComponent,
  /* IoComponentView */ IoComponentOut,
} from './io/io.component';
import { FormComponent } from './form/form.component';
import { CaComponent } from './ca/ca.component';
import { SwitchComponent } from './ca/switch.component';
import { FormComponentCa } from './ca/form.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    TestComponent,
    IoComponent,
    /*  IoComponentView*/ IoComponentOut,
    FormComponent,
    CaComponent,
    SwitchComponent,
    FormComponentCa,
    RoutingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
