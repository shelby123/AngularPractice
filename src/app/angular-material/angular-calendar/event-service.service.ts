import { Injectable } from '@angular/core';
import { Timeslot } from './create-timeslot/timeslot';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  timeslots: Timeslot[] = []

  private timeslotSubject:Subject<Timeslot[]> = new Subject<Timeslot[]>();

  constructor() { }

  sendUpdates() {
    this.timeslotSubject.next(this.timeslots);
  }

  addTimeslot(timeslot:Timeslot) {
    this.timeslots.push(timeslot)
    this.sendUpdates()
  }

  getTimeslots(): Observable<Timeslot[]> {
    return this.timeslotSubject.asObservable();
  }


}
