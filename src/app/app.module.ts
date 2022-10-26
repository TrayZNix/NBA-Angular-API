import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportsMaterialModule } from './modules/imports-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageModule } from './modules/homepage.module';
import { FormsModule } from '@angular/forms';
import { SingleTeamModule } from './modules/single-team.module';
import { EquiposModule } from './modules/equipos.module';
import { FooterModule } from './modules/footer.module';
import { JugadoresModule } from './modules/jugadores.module';
import { MaterialImportsModule } from './modules/material-imports.module';


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    HomepageModule,
    FormsModule,
    SingleTeamModule,
    EquiposModule,
    FooterModule,
    HomepageModule,
    JugadoresModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
