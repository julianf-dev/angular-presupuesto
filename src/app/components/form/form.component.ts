import { Component } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { IncomeService } from 'src/app/services/income/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  isAvailable: boolean = false;
  selectedValue: string = '';
  value: number = 0;
  description: string = '';

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpensesService
  ) {}

  onSubmit() {
    const newItem = {
      description: this.description,
      value: this.value,
    };

    switch (this.selectedValue) {
      case '+':
        this.incomeService.addIcome(newItem);
        this.incomeService.sumIncome();
        this.description = '';
        this.value = 0;
        this.selectedValue = '';
        break;
      case '-':
        this.expenseService.addExpense(newItem);
        this.expenseService.sumExpense();
        this.description = '';
        this.value = 0;
        this.selectedValue = '';
        break;
      default:
        alert('No has selecconado nada.');
    }
  }
}
