import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from 'src/app/class/Expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseSubject = new BehaviorSubject<number>(0);
  expense$ = this.expenseSubject.asObservable();


  private expense: Expense[]=
  [
    {
      description: 'Sweeter',
      value: 2000
    }
  ]

  addExpense(newExpense: Expense){
      this.expense.push(newExpense);
      this.expenseSubject.next(this.getTotalExpense());
  }

  getExpense(){
    return this.expense
  }

  getTotalExpense():number{
      return this.expense.reduce((sum, item) => sum + item.value, 0);
  }

  deleteExpense(index:number){
    this.expense.splice(index,1)
  };
}
