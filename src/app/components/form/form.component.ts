import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { IncomeService } from 'src/app/services/income.service';

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
    private expenseService: ExpenseService,
  ) {}

  onSubmit() {
    const newItem = {
      description: this.description,
      value: this.value,
    };

    switch (this.selectedValue) {
      case '+':
        this.incomeService.addIcome(newItem);
        this.cleanForm();
        break;
      case '-':
        this.expenseService.addExpense(newItem);
        this.cleanForm();
        break;
      default:
        alert('No has selecconado nada.');
    }
  }

  cleanForm(){
    this.description = '';
    this.value = 0;
    this.selectedValue = '';
  }
}
