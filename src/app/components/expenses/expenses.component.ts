import { Component, Input } from '@angular/core';
import { Expense } from 'src/app/class/Expense.model';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  expenses: Expense[] = [];
  @Input() income!: number;

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpense();
  }

  onDelete(index: number) {
    this.expenseService.deleteExpense(index);
  }

  getPercent(expense: Expense) {
    return expense.value / this.income
  }

}
