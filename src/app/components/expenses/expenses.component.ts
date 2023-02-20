import { Component, Input } from '@angular/core';
import { Bills } from 'src/app/class/Bills.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  @Input()
  expense!: Bills;
  @Input()
  indice!: number;

  constructor(){

  }
}
