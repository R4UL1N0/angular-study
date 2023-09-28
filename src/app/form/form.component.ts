import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = ''
  email: string = ''
  message: string = ''

  onSubmit(): void {
    console.log('Submitted')
  }
}
