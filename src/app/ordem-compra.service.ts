import { Pedido } from './shared/pedido.model';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from './app.api'
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){ }

    private urlString = `${URL_API}/pedidos`

    public efetivarCompra(pedido: Pedido): Observable<number> {
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(
            this.urlString,
            JSON.stringify(pedido),
            new RequestOptions({headers: headers})
        ).pipe(map((resposta: Response) => resposta.json().id) );
    }
}
