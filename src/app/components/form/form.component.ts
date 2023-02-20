import { Component } from '@angular/core';
import { BillService,  } from 'src/app/services/bills/bills.service';

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
    private billService: BillService,
  ) {}

  onSubmit() {
    const newItem = {
      description: this.description,
      value: this.value,
    };

    switch (this.selectedValue) {
      case '+':
        this.billService.addIcome(newItem);
        this.billService.sumIncome();
        this.description = '';
        this.value = 0;
        this.selectedValue = '';
        break;
      case '-':
        this.billService.addExpense(newItem);
        this.billService.sumExpense();
        this.description = '';
        this.value = 0;
        this.selectedValue = '';
        break;
      default:
        alert('No has selecconado nada.');
    }
  }
}
