import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filme } from '../models/filme.model';
import { Final } from '../models/final.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${environment.baseUrl}/filmes`);
  }

  public relizarCampeonato(filmesSelecionados: Filme[]): Observable<Final> {
    return this.http.post<Final>(`${environment.baseUrl}/filmes/competidores`, filmesSelecionados);
  }
}
