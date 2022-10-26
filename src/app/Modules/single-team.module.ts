import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SingleTeamComponent } from '../components/single-team/single-team.component';



@NgModule({
  declarations: [SingleTeamComponent],
  imports: [CommonModule, MaterialImportsModule, FlexLayoutModule, FormsModule, AppRoutingModule, BrowserModule],
  exports: [SingleTeamComponent]
})
export class SingleTeamModule { }
