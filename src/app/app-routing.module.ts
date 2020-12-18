import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/lista-filmes/lista-filmes.module').then(m => m.ListaFilmesModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./pages/finalistas/finalistas.module').then(m => m.FinalistasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
