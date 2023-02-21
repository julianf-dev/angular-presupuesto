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
  typeSelected: string = 'addIncome';
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
    switch (this.typeSelected) {
      case 'addIncome':
        this.incomeService.addIcome(newItem);
        this.cleanForm();
        break;
      case 'addExpense':
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
  }

  typeOperator(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.typeSelected = selectedValue;
  }
}
