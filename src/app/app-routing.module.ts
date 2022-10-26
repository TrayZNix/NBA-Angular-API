import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'equipos', component: ListaEquiposComponent },
  { path: 'jugadores', component: JugadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
