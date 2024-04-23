import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../app/services/authentication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(
   private authenticationService: AuthenticationService
  ) { }
  ngOnInit() { }
  public isLoggedIn(): boolean {
   return this.authenticationService.isLoggedIn();
  }
  
  public onLogout(): void {
   return this.authenticationService.logout();
  }
  }
  
