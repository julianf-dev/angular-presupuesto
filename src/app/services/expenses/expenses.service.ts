import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bills } from '../../class/Bills.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  private expenseSubject = new BehaviorSubject<number>(0);
  expense$ = this.expenseSubject.asObservable();
  private expense: Bills[]=
  [
    {
      description: 'Sweeter',
      value: 2000
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

}
