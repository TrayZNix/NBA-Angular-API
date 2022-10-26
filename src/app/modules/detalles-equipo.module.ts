import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesEquipoComponent } from '../components/detalles-equipo/detalles-equipo.component';
import { RouterModule } from '@angular/router';
import { MaterialImportsModule } from './material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout';
import { FooterModule } from './footer.module';

@NgModule({
  declarations: [DetallesEquipoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexModule,
    FooterModule,
  ],
  exports: [DetallesEquipoComponent],
})
export class DetallesEquipoModule {}
