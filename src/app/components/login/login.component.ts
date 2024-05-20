import { Component, OnInit } from '@angular/core';  
import { AuthenticationService } from '../../service/authentication.service';  
import { Router } from '@angular/router';  
@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss']  
})  
export class LoginComponent {  
  username: string = "";  
  password: string = "";  
  invalidMessage:boolean = false;
  userValidation : boolean = false;
  pwdValidation : boolean = false;
  title = 'auth-guard-demo';  
  constructor(private _auth: AuthenticationService, private _router: Router) {  
    if (this._auth.loggedIn) {  
      this._router.navigate(['expenses']);  
    }  
  }  
  login(): void {
    if (this.username != '' && this.password != '') {

      if (this._auth.login(this.username, this.password)) {
        this._router.navigate(["expenses"]);
      }
      else
        this.invalidMessage = true;
        this.userValidation = false;
      this.pwdValidation = false;
    }
    else if (this.username == '' && this.password == '') {
      this.userValidation = true;
      this.pwdValidation = true;
      this.invalidMessage = false;
    }
    else if (this.username == '' && this.password != '') {
      this.userValidation = true;
      this.pwdValidation = false;
      this.invalidMessage = false;
    }
    else if (this.username != '' && this.password == '') {
      this.userValidation = false;
      this.pwdValidation = true;
      this.invalidMessage = false;
    }
   
    else {
      this.userValidation = false;
      this.pwdValidation = false;
    }

  }
} 