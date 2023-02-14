import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Presupuesto Disponible';
  totalValue:number = 0
  ingresos:number = 4345
  egresos:number = 3234
  percent:number = this.egresos / this.ingresos

}
