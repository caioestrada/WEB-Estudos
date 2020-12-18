import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme.model';
import { FilmeService } from 'src/app/services/filme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html'
})
export class ListaFilmesComponent implements OnInit {
  titulo = "Fase de Seleção";
  descricao = "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.";
  filmes: Filme[] = [];
  filmesSelecionados: Filme[] = [];
  masterSelected:boolean = false;

  constructor(
    private filmeService: FilmeService,
    private router : Router,
    private toastr: ToastrService) {
    this.atualizarFilmesSelecionados();
  }

  ngOnInit(): void {
    this.obterFilmes();
  }

  obterFilmes() {
    this.filmeService.obterTodos().subscribe(filmes => { this.filmes = filmes;})
  }

  atualizarFilmesSelecionados() {
    this.filmesSelecionados = [];
    for (var i = 0; i < this.filmes.length; i++) {
      if(this.filmes[i].checked) {
        this.filmesSelecionados.push(this.filmes[i]);
      }
    }
  }

  onCheckItem() {
    this.atualizarFilmesSelecionados();
  }

  gerarMeuCampeonato () {
    if (this.filmesSelecionados.length != 8) {
      this.toastr.warning('Selecione 8 filmes!', 'Copa Filmes');
      return;
    }

    this.filmeService.relizarCampeonato(this.filmesSelecionados)
    .subscribe(finalistas => { this.router.navigateByUrl('/final', { state: finalistas }); })
  }
}
