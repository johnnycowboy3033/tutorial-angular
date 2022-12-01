import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ShowArraysModule} from "../../projects/show-arrays/src/lib/show-arrays.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ShowArraysModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
