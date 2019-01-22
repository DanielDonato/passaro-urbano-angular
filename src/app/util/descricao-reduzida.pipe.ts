import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(text: string, qteChar: number): string {
        if(text.length > qteChar){
            return text.substr(0, qteChar)  + '...';
        }
        return text;
    }
}