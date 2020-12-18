import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFilmesComponent } from './lista-filmes.component';

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaFilmesRoutingModule { }
