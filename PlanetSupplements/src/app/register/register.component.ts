import { Component } from '@angular/core';
import { Register } from 'app/Model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  private register = new Register();

  invalid = false;

  errors: Array<string> = [];

  constructor() {
    this.register.states = [
      { value: 'AL', viewValue: 'Alabama' },
      { value: 'TN', viewValue: 'Tennessee' },
      { value: 'VA', viewValue: 'Virginia' }
    ];
  }

  registerUser() {
    this.invalid = true;
    this.errors.push("Email is required.");
  }

  clearForm() {
    this.register.email = this.register.password = this.register.confirmPassword
      = this.register.firstName = this.register.lastName = this.register.phoneNumber
      = this.register.address1 = this.register.address2 = this.register.city
      = this.register.zipCode = this.register.state = null;

    this.invalid = false;
    this.errors = [];
  }

  keyPressNumericOnly(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}