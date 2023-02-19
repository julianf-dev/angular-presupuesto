import { Injectable } from '@angular/core';
import { Bills } from '../../class/Bills.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor() { }

  sum:number = 0
  income: Bills[]=
  [
      new Bills('swetter',20333)
  ]

  addIcome(bill: Bills){
      this.income.push(bill);
      console.log('Incone add correctly')
  }

}
