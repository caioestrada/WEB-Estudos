import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListaFilmesComponent } from './lista-filmes.component';
import { ListaFilmesRoutingModule } from './lista-filmes-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomePanelModule } from 'src/app/components/home-panel/home-panel.module';

@NgModule({
  declarations: [
    ListaFilmesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ListaFilmesRoutingModule,
    HomePanelModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ListaFilmesModule { }
