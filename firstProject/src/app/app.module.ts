import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Header } from "./header/head.component";
import { HeadService } from "./header/header.service";
import { TestComponent } from "./test/test.component";
import { IoComponent, IoComponentView, IoComponentOut } from './io/io.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, Header, TestComponent, IoComponent, IoComponentView, IoComponentOut, FormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
