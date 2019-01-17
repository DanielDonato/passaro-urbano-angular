import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'; 
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertasAux:Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000), // executa a ação depois do tempo passado
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log("Requisição http para a api");
          if(termo.trim() === ''){
            return of<Oferta[]>([]);
          }
            return this.ofertasService.pesquisaOfertas(termo);
        }),
        catchError((err:any) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
      );

      this.ofertas.subscribe((ofertas:Oferta[]) => {
        console.log(ofertas);
        this.ofertasAux = ofertas;
      })
  }

  public pesquisa(termoDaBusca:string): void{
    console.log("keyup caracter: ", termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca) //parametro passado aqui é recebido no switchMap
  }

}
