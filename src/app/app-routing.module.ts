import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { DetallesEquipoComponent } from './components/detalles-equipo/detalles-equipo.component';
import { ErrorComponent } from './components/error/error.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallesEquipoModule } from './modules/detalles-equipo.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'equipos', component: ListaEquiposComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: ':teamName/:year/detalles', component: DetallesEquipoComponent },
  { path: ':personId/:year/estadisticas', component: EstadisticasComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
