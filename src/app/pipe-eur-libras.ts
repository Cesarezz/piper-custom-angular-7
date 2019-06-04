import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pipeEurLibras'})
export class PipeEurLibras implements PipeTransform {
    transform(value: number): number{
        return value * 0.89;
    }

}
