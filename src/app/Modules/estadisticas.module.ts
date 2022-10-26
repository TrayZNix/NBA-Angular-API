import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from '../components/estadisticas/estadisticas.component';
import { MaterialImportsModule } from './material-imports.module';
import { FlexModule } from '@angular/flex-layout';
import { HeaderModule } from './header.module';
import { FooterModule } from './footer.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EstadisticasComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexModule,
    FooterModule,
    HeaderModule,
  ],
  exports: [EstadisticasComponent],
})
export class EstadisticasModule {}
