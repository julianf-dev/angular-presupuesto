import { Component, Input } from '@angular/core';
import { IncomeService } from 'src/app/services/income/income.service';
import { Bills } from '../../class/Bills.model'

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  @Input()
  income!: Bills;
  @Input()
  indice!: number;

  constructor(private incomeService: IncomeService){

  }
}
