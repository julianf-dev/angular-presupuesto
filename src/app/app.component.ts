import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  ingresos:number = 0
  egresos:number = 3234
  percent:number = this.egresos / this.ingresos
  income:Bills[] = []

  constructor(private incomeService: IncomeService){
  }

  ngOnInit():void{
    this.incomeService.income$.subscribe((income) => {
      this.ingresos = income;
    });
    this.income = this.incomeService.getIncome();
    this.ingresos = this.incomeService.sumIncome();
  }

}
