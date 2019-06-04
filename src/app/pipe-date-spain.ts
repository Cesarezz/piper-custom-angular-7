import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "pipeDateSpain"})
export class PipeDateSpain implements PipeTransform{
    transform(value: Date | string):string {

        if(!value) return;

        if(typeof value === 'string'){

            value = new Date(value);

        }

        return `${this.getWeekDay(value.getDay())}, ${value.getDate()} de ${this.getMonth(value.getMonth())} de ${value.getFullYear()}`
    }

    public getWeekDay(numberWeekDay: number): string{

        let weekdays = new Array(7);
        weekdays[0] = "Domingo";
        weekdays[1] = "Lunes";
        weekdays[2] = "Martes";
        weekdays[3] = "Miércoles";
        weekdays[4] = "Jueves";
        weekdays[5] = "Viernes";
        weekdays[6] = "Sábado";

        return weekdays[numberWeekDay];

    }

    public getMonth(numberMonth: number): string{

        let monthNames = new Array(12);
        monthNames[0] = "Enero";
        monthNames[1] = "Febrero";
        monthNames[2] = "Marzo";
        monthNames[3] = "Abril";
        monthNames[4] = "Mayo";
        monthNames[5] = "Junio";
        monthNames[6] = "Julio";
        monthNames[7] = "Agosto";
        monthNames[8] = "Septiembre";
        monthNames[9] = "Octubre";
        monthNames[10] = "Noviembre";
        monthNames[11] = "Diciembre";

        return monthNames[numberMonth];

    }

    
}
