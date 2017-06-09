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
  
  constructor() { }

  ngOnInit() {
  }

}
