import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthenticationService } from '../../service/authentication.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router,private authenticationService: AuthenticationService){} 
 logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  
  menuData = [{ "menuTitle": "Home", "routerLink": "home" },{ "menuTitle": "Expenses", "routerLink": "expenses" }];
}
