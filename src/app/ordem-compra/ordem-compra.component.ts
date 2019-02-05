import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento = '';

  //controles de validaçao dos campos
  public enderecoValido: boolean = true;
  public numeroValido: boolean = true;
  public complementoValido: boolean = true;
  public formaPagamentoValido: boolean = true;

  //estados primitivos do campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //controlar botão confirmar compra
  public formEstado: string = 'disable';

  constructor(private ordemCompraSerivce: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public atulizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = (this.endereco.length > 3) ? true : false;
    this.habilitaForm();
  }

  public atulizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    this.numeroValido = (this.numero.length > 0) ? true : false;
    this.habilitaForm();
  }

  public atulizaComplemento(complemento : string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if(this.complemento.length > 0){
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = (this.formaPagamento != '') ? true : false;
    this.habilitaForm();
  }

  public habilitaForm(): void{
    if(this.enderecoValido
    && this.numeroValido
    && this.formaPagamento){
      this.formEstado = '';
    } else {
      this.formEstado = 'disable'
    }
  }

  public confirmarCompra(): void{
    let pedido: Pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento);
    this.ordemCompraSerivce.efetivarCompra(pedido)
  }

}
