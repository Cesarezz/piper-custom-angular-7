import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minutesToSeconds'})
export class MinutesToSeconds implements PipeTransform{
    transform(value: number) {
        return value * 60;
    }
}
