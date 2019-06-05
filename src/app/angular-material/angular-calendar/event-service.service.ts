import { Injectable } from '@angular/core';
import { Timeslot } from './create-timeslot/timeslot';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  timeslots: Timeslot[] = []

  constructor() { }

  addTimeslot(timeslot:Timeslot) {
    this.timeslots.push(timeslot)
  }

  getTimeslots(boards?:string[]) {
    if(boards) {
      let filtered = []
      this.timeslots.forEach(timeslot=> {
        if(boards.indexOf(timeslot.board.name) >= 0 ) {
          filtered.push(timeslot);
        }
      })
      return filtered
    } else {
      return this.timeslots
    }
    
  }
}