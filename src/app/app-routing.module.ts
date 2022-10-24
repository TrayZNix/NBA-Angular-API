import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesEquipoComponent } from './components/detalles-equipo/detalles-equipo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallesEquipoModule } from './modules/detalles-equipo.module';

const routes: Routes = [
  { path: 'jugadores', component: JugadoresComponent },
  { path: ':teamName/:year/detalles', component: DetallesEquipoComponent },
  { path: '**', redirectTo: 'jugadores' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
