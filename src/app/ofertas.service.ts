import { Oferta } from './shared/oferta.model'
import {Http} from '@angular/http';

export class OfertasService {
    
    constructor(){ }

    public ofertas: Oferta[] = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOfertas():Oferta[] {
        return this.ofertas;
    }

    public getOfertas2(): Promise<Oferta[]>{
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
    }
}