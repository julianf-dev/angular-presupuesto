import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bills } from '../../class/Bills.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() {
   }

  private incomeSubject = new BehaviorSubject<number>(0);
  income$ = this.incomeSubject.asObservable();
  private expenseSubject = new BehaviorSubject<number>(0);
  expense$ = this.expenseSubject.asObservable();
  private totalSubject = new BehaviorSubject<number>(0);
  totalValue$ = this.totalSubject.asObservable();

  private expense: Bills[]=
  [
    {
      description: 'Sweeter',
      value: 2000
    }
  ]
  private income: Bills[]=
  [
    {
      description: 'Sweeter',
      value: 22300
    }
  ]

  addExpense(newExpense: Bills){
      this.expense.push(newExpense);
      this.expenseSubject.next(this.sumExpense());
  }

  getExpense(){
    return this.expense
  }

  sumExpense(){
      return this.expense.reduce((sum, item) => sum + item.value, 0);
  }


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
