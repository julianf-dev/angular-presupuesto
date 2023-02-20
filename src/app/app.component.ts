import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bills } from './class/Bills.model';
import { BillService } from './services/bills/bills.service';
import {  } from './services/bills/bills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Presupuesto Disponible';
  ingresos: number = 0;
  egresos: number = 0;
  percent: number = 0;
  income: Bills[] = [];
  expenses: Bills[] = [];
  totalValue: number = 0;

  constructor(
    private billService: BillService,
  ) {}

  ngOnInit(): void {
    this.getIncome();
    this.getExpense();
    this.getTotalValue();
    this.percent = this.egresos / this.ingresos;
  }


  getIncome(){
    this.billService.income$.subscribe((income) => {
      this.ingresos = income;
    });
    this.income = this.billService.getIncome();
    this.ingresos = this.billService.sumIncome();
  }

  getExpense(){
    this.billService.expense$.subscribe((expense) => {
      this.egresos = expense;
    });
    this.expenses = this.billService.getExpense();
    this.egresos = this.billService.sumExpense();
  }

  getTotalValue(){
    this.billService.totalValue$.subscribe((total) =>{
      this.totalValue = total
    })
  }
}
