import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:string = "";

  constructor(private route:ActivatedRoute
    , private ofertaService:OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params) => {
      this.ofertaService.getOndeFicaOfertaPorId(parametro.id)
      .then( (resposta:string) => {
        this.ondeFica = resposta;
      });
    });
  }

}
