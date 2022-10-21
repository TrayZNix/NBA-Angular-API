import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './Modules/material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEquiposComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
