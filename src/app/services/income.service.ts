import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from '../class/Income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {


  private income: Income[]=
  [
    {
      description: 'Sweeter',
      value: 22300
    }
  ]

  addIcome(newIncome: Income){
      this.income.push(newIncome);
  }

  getIncome(){
    return this.income
  }

  getTotalIncome():number{
      return this.income.reduce((sum, item) => sum + item.value, 0);
  }

  deleteIncome(index:number){
    this.income.splice(index,1)
  };
}
