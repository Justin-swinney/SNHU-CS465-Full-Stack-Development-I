import { Injectable, Inject} from '@angular/core';
import { Trip } from '../models/trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from '../models/authresponse';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage

    ) { }

  private apiBasedUrl = 'http://localhost:3000/api';
  private tripUrl = `${this.apiBasedUrl}/trips/`;

  private getHeaders(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  
  
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data.service #AddTrip');
    return this.http  
      .post(this.tripUrl, formData, {headers: this.getHeaders()})
      .toPromise()
      .then(response => response as Trip[])
       .catch(this.handleError);
  };


  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
    .get<Trip[]>(`${this.apiBasedUrl}/trips`)
    .toPromise()
    .catch(this.handleError);
  };

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside trip-data.service #GetTrip');
    return this.http
        .get(this.tripUrl + tripCode)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }
  
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data.service #UpdateTrip');
    console.log(formData);
    return this.http
    .put(this.tripUrl + formData.code, formData, {headers: this.getHeaders()})
    .toPromise()
    .then(response => response as Trip[])
    .catch(this.handleError);
   }

   public deleteTrip(tripCode: string) {
    console.log('Inside trip-data.service #DeleteTrip');
    return this.http
      .delete<void>(this.tripUrl + tripCode, {headers: this.getHeaders()})
      .toPromise()
      .catch(this.handleError);
   }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('login', user);
    }

  public register(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('register', user);
    }

  private makeAuthApiCall(urlPath: string, user: User): 
    Promise<AuthResponse> {
      const url: string = `${this.apiBasedUrl}/${urlPath}`;
      return this.http
        .post<AuthResponse>(url, user)
        .toPromise()
        .catch(this.handleError);
  }
}