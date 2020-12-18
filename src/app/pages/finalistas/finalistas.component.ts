import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Final } from 'src/app/models/final.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-finalistas',
  templateUrl: './finalistas.component.html'
})
export class FinalistasComponent implements OnInit {
  titulo = "Resultado Final";
  descricao = "Veja o resultado do Campeonato de filmes de forma simples e rápida.";
  final: any;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    .subscribe(finallistas => this.final = finallistas);
  }

  ngOnInit(): void {
  }

}
