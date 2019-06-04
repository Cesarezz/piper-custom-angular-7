import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"pipekmToMilles"})
export class PipekmToMilles implements PipeTransform{
    transform(value: number): number {
        return value * 0.621371;
    }
}
