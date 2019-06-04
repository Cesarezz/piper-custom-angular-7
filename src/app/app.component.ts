import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipes-custom';

  dateNow: Date = null;

  km: number = 1000;

  minutes: number = 600;

  lineString: string = "Where have you born?";

  eur: number = 900.5;

  numero: number = 5;

  numeroMultiplica: number = 6;

}
