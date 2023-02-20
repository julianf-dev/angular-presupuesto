import { Component, OnInit } from '@angular/core';
import { Expense } from './class/Expense.model';
import { Income } from './class/Income.model';
import { ExpenseService } from './services/expense/expense.service';
import { IncomeService } from './services/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  incomes:Income[];
  expenses:Income[];

  constructor( private incomeService: IncomeService, private expenseService:ExpenseService){
    this.incomes = incomeService.getIncome();
    this.expenses = expenseService.getExpense();
  }

  getTotalIncome(){
    return this.incomeService.getTotalIncome();
  }

  getTotalExpense(){
    return this.expenseService.getTotalExpense();
  }

  getPercent(){
    return this.getTotalExpense() / this.getTotalIncome();
  }

  getTotalValue(){
    return this.getTotalIncome() - this.getTotalExpense();
  }
}
