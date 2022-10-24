import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';

const routes: Routes = [
  {path: 'equipos', component: ListaEquiposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
