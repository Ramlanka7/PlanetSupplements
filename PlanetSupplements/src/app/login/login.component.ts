import { Component } from '@angular/core';
import { Login } from 'app/Model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  private login = new Login();

  invalid = false;

  canUserLogin() {
    if (this.login.email && this.login.password) {
      this.invalid = this.validateEmail(this.login.email);
    } else {
      this.invalid = false;
    }
  }

  loginUser() {
    //todo: Implement login functionality
  }

  validateEmail(email: string) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
}