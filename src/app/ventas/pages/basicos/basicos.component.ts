import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'roberto';
  nombreUpper: string = 'ROBERTO';
  nombreCompleto: string = 'RobErTo MariHuaN';


  fecha: Date = new Date(); // El día de hoy

}
