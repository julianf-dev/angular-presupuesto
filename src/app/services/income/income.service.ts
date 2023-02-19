import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bills } from '../../class/Bills.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor() { }

  private incomeSubject = new BehaviorSubject<number>(0);
  income$ = this.incomeSubject.asObservable();
  private income: Bills[]=
  [
    {
      description: 'Sweeter',
      value: 22300
    }
  ]

  addIcome(newIncome: Bills){
      this.income.push(newIncome);
      this.incomeSubject.next(this.sumIncome());
  }

  getIncome(){
    return this.income
  }

  sumIncome(){
      return this.income.reduce((sum, item) => sum + item.value, 0);
  }

}
