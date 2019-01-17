import { Oferta } from './shared/oferta.model'
import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http';
import {URL_API} from "./app.api";
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    private urlApi = `${URL_API}/ofertas`;
    
    constructor(private http:Http){ }

    public getOfertas():Promise<Oferta[]> {
        // efetuar uma requisição http e retornar um promisse contendo um Array de ofertas
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
                .toPromise()
                .then((resposta: Response) => resposta.json());
    }

    public getOfertasPorCategoria(categoria:String): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
    }

    public getOfertaPorId(id:number):Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta.json()[0]);
    }

    public getComoUsarOfertaPorId(id:number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0].descricao;
        })
    }

    public getOndeFicaOfertaPorId(id:number):Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0].descricao;
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(map((resposta: Response) => resposta.json()), retry(10));
    }

    /*public getOfertas2(): Promise<Oferta[]>{
        return new Promise((resolve, reject) => {
            let deuCerto = true;
            if(deuCerto){
                setTimeout(() => resolve(this.ofertas), 3000)
            } else {
                reject({codigoErro: 404, message: "Servidor não encontrado"})
            }
        }).then((ofertas: Oferta[]) => {
            //fazer alguma tratatica
            console.log("Primeiro then")
            return ofertas;
        }).then((ofertas: Oferta[])=> {
            //fazer outra tratativa
            console.log("Segundo then");
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2(ofertas)}, 3000)
            });
        })
        .then((ofertas: Oferta[]) => {
            console.log('Terceiro then executado após 3 segundos porque estava aguardando uma promisse ser resolvida');
            return ofertas;
        });
    }*/
}