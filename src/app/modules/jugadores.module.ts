import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';
import { FlexModule } from '@angular/flex-layout';
import { MaterialImportsModule } from './material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { JugadoresService } from '../services/jugadores.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterModule } from './footer.module';
import { HeaderModule } from './header.module';

@NgModule({
  declarations: [JugadoresComponent],
  imports: [
    CommonModule,
    FlexModule,
    MaterialImportsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
  ],
  providers: [JugadoresService],
  exports: [JugadoresComponent],
})
export class JugadoresModule {}
