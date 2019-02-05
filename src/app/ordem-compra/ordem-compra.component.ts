import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento = '';

  constructor() { }

  ngOnInit() {
  }

  public atulizaEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  public atulizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  public atulizaComplemento(complemento : string): void {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  public atualizaFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);
  }

}
