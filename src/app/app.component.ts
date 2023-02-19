import { Component, OnInit } from '@angular/core';
import { Bills } from './class/Bills.model';
import { IncomeService } from './services/income/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Presupuesto Disponible';
  totalValue:number = 0
  ingresos:number = 4345
  egresos:number = 3234
  percent:number = this.egresos / this.ingresos
  income:Bills[] = []

  constructor(private incomeServices: IncomeService){

  }

  ngOnInit(){
    this.income = this.incomeServices.income;
  }
}
