import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokuComponent } from './goku/goku/goku.component';
import { GohanComponent } from './gohan/gohan/gohan.component';
import { GotenComponent } from './goten/goten/goten.component';
 

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    GohanComponent,
    GotenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
