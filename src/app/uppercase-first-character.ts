import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"uppercaseFirstCharacter"})
export class UppercaseFirstCharacter implements PipeTransform{
    transform(value: string): string {

        let arrayWords = value.split(" ");

        let valuePipe = arrayWords.map( (item) => {

            let charactersArray = item.split("");

            if(charactersArray.length === 0) return;

            charactersArray[0] = charactersArray[0].toUpperCase();

            return charactersArray.join("");

        }).join(" ");

        return valuePipe;
    }
}
