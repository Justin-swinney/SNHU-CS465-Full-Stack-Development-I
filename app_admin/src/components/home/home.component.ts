import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../app/services/authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor (
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

  
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
   }
  
}
