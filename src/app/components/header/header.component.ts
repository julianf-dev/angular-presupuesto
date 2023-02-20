import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Presupuesto Disponible';
  @Input() totalValue!:number;
  @Input() ingresos!:number;
  @Input() egresos!:number;
  @Input() percent!:number;



}
