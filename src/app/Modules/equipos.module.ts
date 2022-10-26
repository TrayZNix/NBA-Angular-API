import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEquiposComponent } from '../components/lista-equipos/lista-equipos.component';
import { MaterialImportsModule } from './material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ListaEquiposComponent],
  imports: [CommonModule, MaterialImportsModule, FlexLayoutModule, FormsModule, AppRoutingModule, BrowserModule],
  exports: [ListaEquiposComponent]
})
export class EquiposModule { }
