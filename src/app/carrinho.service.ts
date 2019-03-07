import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta) {
        const itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1);
        const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
        } else {
            this.itens.push(itemCarrinho);
        }
        console.log(this.itens);
    }

  public totalCarrinhoCompra(): number {
    let total: number = 0;
    this.itens.map((item: ItemCarrinho) => {
        total += (item.valor * item.quantidade);
    });
    return total;
  }

  public adicionarQuantidade(itenCarrinho: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itenCarrinho.id);
    if (itemCarrinhoEncontrado) {
        itemCarrinhoEncontrado.quantidade++;
    }
  }

  public removerQuantidade(itenCarrinho: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itenCarrinho.id);
    if (itemCarrinhoEncontrado) {
        itemCarrinhoEncontrado.quantidade--;
        if (itemCarrinhoEncontrado.quantidade === 0) {
            this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
        }
    }
  }

  public limparCarrinho(): void {
      this.itens = [];
  }

}

export { CarrinhoService };
