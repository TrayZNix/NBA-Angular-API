import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';
import { FlexModule } from '@angular/flex-layout';
import { MaterialImportsModule } from './material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { JugadoresService } from '../services/jugadores.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JugadoresComponent],
  imports: [
    CommonModule,
    FlexModule,
    MaterialImportsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [JugadoresService],
  exports: [JugadoresComponent],
})
export class JugadoresModule {}
