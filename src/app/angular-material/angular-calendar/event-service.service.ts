import { Injectable } from '@angular/core';
import { Timeslot } from './create-timeslot/timeslot';
import { Subject, Observable } from 'rxjs';
import { TimeslotBackendService } from './timeslot/timeslot-backend.service';
import { tap } from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService implements Resolve<any> {
  

  timeslots: Timeslot[] = []

  private timeslotSubject:Subject<Timeslot[]> = new Subject<Timeslot[]>();

  constructor(private timeslotService: TimeslotBackendService,) { }


  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.timeslotService.getTimeslots().pipe(tap(value=> {
      this.timeslots = value
      this.timeslots.forEach(timeslot=> {
        timeslot.date = new Date(timeslot.date)
        console.log(timeslot.date)
      })
    }));
  }

  sendUpdates() {
    this.timeslotSubject.next(this.timeslots);
  }

  addTimeslot(timeslot:Timeslot) {
    console.log(JSON.stringify(timeslot))
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

  setTimeslots(value: Timeslot[]): any {
    this.timeslots = value;
  }

  getTimeslots(): Observable<Timeslot[]> {
    return this.timeslotSubject.asObservable();
  }


}
