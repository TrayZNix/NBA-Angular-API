import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent }
  //{path: 'jugadores', component: ListaJugadoresComponent}
  //{path: 'equipos', component: ListaEquiposComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
