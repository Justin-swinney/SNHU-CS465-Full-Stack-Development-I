import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TripDataService } from '../../app/services/trip-data.service';
import { Trip } from '../../app/models/trip';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrl: './delete-trip.component.css'
})

export class DeleteTripComponent {
  @Input() trip!: Trip;
  @Output() tripDeleted = new EventEmitter<Trip>();

  constructor(
    private tripService: TripDataService,
  ) { }

  deleteTrip() {
    this.tripService.deleteTrip(this.trip.code)
      .then(() => {
        this.tripDeleted.emit(this.trip);
      })
      .catch((error: any) => console.error('Error deleting trip:', error));
  }
  }

