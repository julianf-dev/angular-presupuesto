import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { IncomeComponent } from './components/income/income.component';
import { DischargeComponent } from './components/discharge/discharge.component';
import { FormsModule } from '@angular/forms';
import { FormatPipe } from './pipes/format.pipe';
import { GeneralComponent } from './components/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    IncomeComponent,
    DischargeComponent,
    FormatPipe,
    GeneralComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
