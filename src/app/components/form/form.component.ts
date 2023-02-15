import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  isAvailable:boolean = false;
  signal:string = ''

  if (signal = '+') {
    this.isAvailable = true;
    console.log(this.signal)
  }

}
