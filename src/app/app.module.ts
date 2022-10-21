import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FooterComponent } from './components/footer/footer.component';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
