import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bills } from './class/Bills.model';
import { ExpensesService } from './services/expenses/expenses.service';
import { IncomeService } from './services/income/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Presupuesto Disponible';
  ingresos: number = 0;
  egresos: number = 0;
  percent: number = this.egresos / this.ingresos;
  income: Bills[] = [];
  expenses: Bills[] = [];
  totalValue: number = 0;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.getIncome();
    this.getExpense();
    this.totalValue = this.ingresos - this.egresos
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalValue = this.ingresos - this.egresos
  }

  getIncome(){
    this.incomeService.income$.subscribe((income) => {
      this.ingresos = income;
    });
    this.income = this.incomeService.getIncome();
    this.ingresos = this.incomeService.sumIncome();
  }

  getExpense(){
    this.expenseService.expense$.subscribe((expense) => {
      this.egresos = expense;
    });
    this.expenses = this.expenseService.getExpense();
    this.egresos = this.expenseService.sumExpense();
  }
}
