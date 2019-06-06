import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timeslot } from '../create-timeslot/timeslot';

@Injectable({
  providedIn: 'root'
})
export class TimeslotBackendService {

  constructor(private http: HttpClient) { 

  }

  public getTimeslots():Observable<Timeslot[]> {
    return this.http.get("./assets/timeslots.json") as Observable<Timeslot[]>;
  }
}
