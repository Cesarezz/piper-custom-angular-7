import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "pipeMultiplicaValorParam"})
export class PipeMultiplicaValorParam implements PipeTransform{
    transform(value: number, numeroMultiplicar?:number): number{
       
        return value * numeroMultiplicar;

    }
}
