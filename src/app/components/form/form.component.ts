import { Component } from '@angular/core';
import { Bills } from 'src/app/class/Bills.model';
import { IncomeService } from 'src/app/services/income/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  isAvailable:boolean = false;
  selectedValue:string = ''
  value:number = 0;
  description:string =''

  constructor(private incomeService:IncomeService){

  }

  onSubmit(){
    const  newItem = {
      description: this.description,
      value: this.value
    };

    if(this.selectedValue === '+'){
      this.incomeService.addIcome(newItem);
      this.incomeService.sumIncome();
      this.description = '';
      this.value = 0;
      this.selectedValue = '';
    }
    else{
      console.log('Holi')
    }
  }
}
