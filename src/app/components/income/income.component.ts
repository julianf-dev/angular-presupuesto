import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/class/Income.model';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  income: Income[] = [];

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.income = this.incomeService.getIncome();
  }

  onDelete(index:number){
    this.incomeService.deleteIncome(index);
  }
}
