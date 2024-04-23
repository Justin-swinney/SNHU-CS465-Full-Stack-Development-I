import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../../app/services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})

export class EditTripComponent {
  editForm: any;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }
  
ngOnInit() { 
  let tripCode = localStorage.getItem("tripCode"); 
  if (!tripCode) { 
    alert("Something wrong, couldn't find where I stashed tripCode!"); 
    this.router.navigate(['']); 
    return; 
  } 

  console.log('EditTripComponent#onInit found tripCode ' + tripCode); 

  this.editForm = this.formBuilder.group({ 
    _id: [], 
    code: [tripCode, Validators.required], 
    name: ['', Validators.required], 
    length: ['', Validators.required], 
    start: ['', Validators.required], 
    resort: ['', Validators.required], 
    perPerson: ['', Validators.required], 
    image: ['', Validators.required], 
    description: ['', Validators.required], 
  }) 
    console.log('EditTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')'); 
    this.tripService.getTrip(tripCode) 
    .then(data => { console.log(data);
    this.editForm.patchValue(data[0]); 
  }) } 
  onSubmit() { 
    this.submitted = true; 
    if (this.editForm.valid) { 
      this.tripService.updateTrip(this.editForm.value) 
      .then(data => { console.log(data); 
        this.router.navigate(['/list-trips']); 
      });
    }
  }
  get f() { 
    return this.editForm.controls; 
  }
}