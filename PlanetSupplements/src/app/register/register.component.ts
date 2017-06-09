import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  states = [
    { value: 'AL', viewValue: 'Alabama' },
    { value: 'TN', viewValue: 'Tennessee' },
    { value: 'VA', viewValue: 'Virginia' }
  ];

  email: string;

  password: string;

  confirmPassword: string;

  firstName: string;

  lastName: string;

  phoneNumber: string;

  address1: string;

  address2: string;

  city: string;

  state: string;

  zipCode: string;

  constructor() { }

  ngOnInit() {
  
  }

  registerUser() {
    alert("Email required");
  }

  clearForm() {
    this.email = this.password = this.confirmPassword
      = this.firstName = this.lastName = this.phoneNumber
      = this.address1 = this.address2 = this.city
      = this.zipCode = this.state = null;
  }
}
