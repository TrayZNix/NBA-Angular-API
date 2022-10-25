import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsMaterialModule } from './imports-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from '../components/homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    ImportsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
