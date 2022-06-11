import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

constructor(
  private http: HttpClient
) { }

  listaOfertas(){
    this.http.get<any>('https://playground.barato.com.br/desafio-front/api/offers').pipe(
    )
  }

}
