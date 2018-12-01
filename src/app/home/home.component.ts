import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] // Componentes que serão de injetados NESTA CLASSE 
})
export class HomeComponent implements OnInit {
  
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { } //INJETANDO DEPENDENCIA

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);
    this.ofertasService.getOfertas()
      .then( (ofertas:Oferta[]) => {
        this.ofertas = ofertas;
      })
      .catch((obj: any) => {
        console.log(obj);
    });
  }
}
