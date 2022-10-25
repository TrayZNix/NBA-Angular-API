import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportsMaterialModule } from './modules/imports-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageModule } from './modules/homepage.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportsMaterialModule,
    FlexLayoutModule,
    HomepageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
