import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../../app/models/trip';
import { AuthenticationService } from '../../app/services/authentication';


@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})

export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  @Output() deleteEvent = new EventEmitter<Trip>();
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  ngOnInit(): void {
  }

  editTrip(trip : Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  deleteTrip(trip: Trip): void {
    this.deleteEvent.emit(this.trip);
    window.location.reload(); //reload component not page ****
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
   }

}