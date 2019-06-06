import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TimeslotBackendService } from './timeslot/timeslot-backend.service';
import { tap } from 'rxjs/operators';
import { EventServiceService } from './event-service.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarResolverService implements Resolve<any>{
  

  constructor(private timeslotService: TimeslotBackendService, private eventService: EventServiceService) { }


  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.timeslotService.getTimeslots().pipe(tap(value=> {this.eventService.setTimeslots(value)}));

  }

}
