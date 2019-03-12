import { Component } from '@angular/core';
import { Login } from 'app/Model/Login';
import { HttpModule } from '@angular/http';
import { UserService } from 'app/services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private http: HttpModule, private userService: UserService){

  }

// tslint:disable-next-line: member-ordering
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
    //return this.http.
  }

  validateEmail(email: string) {
   return true;
  }
}