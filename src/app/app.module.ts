import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { FormsModule } from '@angular/forms';
import { FormatPipe } from './pipes/format.pipe';
import { IncomeService } from './services/income.service';
import { ExpenseService } from './services/expense/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    IncomeComponent,
    ExpensesComponent,
    FormatPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [ IncomeService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
