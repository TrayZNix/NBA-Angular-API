import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageModule } from './modules/homepage.module';
import { FormsModule } from '@angular/forms';
import { EquiposModule } from './modules/equipos.module';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FooterComponent } from './components/footer/footer.component';
import { FlexModule } from '@angular/flex-layout';
import { JugadoresModule } from './modules/jugadores.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterModule } from './modules/footer.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HomepageModule,
    MaterialImportsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    EquiposModule,
    FlexModule,
    JugadoresModule,
    HttpClientModule,
    ReactiveFormsModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
