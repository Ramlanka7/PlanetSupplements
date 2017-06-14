﻿import { Component, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Register } from 'app/Model/Register';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RegisterService } from "app/services/registerService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [RegisterService]
})
export class RegisterComponent {
  private register = new Register();

  invalid = false;

  errors: Array<string> = [];

  constructor(private http: Http,
    private configProvider: RegisterService) {
    this.register.states = [
      { value: 'AL', viewValue: 'Alabama' },
      { value: 'TN', viewValue: 'Tennessee' },
      { value: 'VA', viewValue: 'Virginia' }
    ];
  }

  registerUser() {
    this.errors = [];
    this.validateModel();
    if (this.errors.length > 0) {
      this.invalid = true;
    } else {
      //todo: Call web api to register user
    }
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

  validateModel(): any {
    //validate Email
    if (this.register.email) {
      if (!this.validateEmail(this.register.email)) {
        this.errors.push("Please enter valid Email.");
      }
    } else {
      this.errors.push("Email is required.");
    }

    //validate Password
    if (this.register.password && this.register.confirmPassword) {
      if (this.register.password !== this.register.confirmPassword) {
        this.errors.push("Password and Confirm Password are not same.");
      }
    }
    else {
      if (!this.register.password) {
        this.errors.push("Password is required.");
      }
      if (!this.register.confirmPassword) {
        this.errors.push("Confirm Password is required.");
      }
    }

    //validate First Name
    if (!this.register.firstName) {
      this.errors.push("First Name is required.");
    }

    //validate Last Name
    if (!this.register.lastName) {
      this.errors.push("Last Name is required.");
    }
  }

  validateEmail(email: string) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  authenticateFacebook() {
    window.location.href = 'https://www.facebook.com/v2.9/dialog/oauth?client_id=1674757496165279&redirect_uri=8142b1f5fef3fb1f1ee14a2b60488bb5&scope=public_profile'; //+
      //this.configProvider.config.facebook.clientId +
      //'&redirect_uri=' + this.configProvider.config.facebook.redirectURI + '&scope=public_profile';
  }
}