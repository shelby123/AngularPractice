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
    timeslot.id = timeslot.board.name + "" + timeslot.hour + "" + timeslot.minute
    this.timeslots.push(timeslot)
    this.sendUpdates()
  }

  updateTimeslot(timeslot: Timeslot): boolean {
    for(let i = 0; i < this.timeslots.length; i++) {
      if(this.timeslots[i].id == timeslot.id) {
        this.timeslots[i] = timeslot
        this.sendUpdates()
        return true
      }
    }
    return false;

    throw new Error("Method not implemented.");
  }

  getTimeslots(): Observable<Timeslot[]> {
    return this.timeslotSubject.asObservable();
  }


}
