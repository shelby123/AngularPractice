import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { Timeslot } from '../create-timeslot/timeslot';
import { EventServiceService } from '../event-service.service';
import { WeekDay } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CreateTimeslotComponent } from '../create-timeslot/create-timeslot.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayColors = ['#e9baff', '#ff9ee0', '#fcd999', '#fcf7b5', '#b7f9b3', '#bacaff', '#e9baff' ];
  dayItems =  [
    { day: WeekDay[0], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[1], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[2], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[3], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[4], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[5], timeslots: [], filteredTimeslots: [] },
    { day: WeekDay[6], timeslots: [], filteredTimeslots: [] }
  ];

  private _calendarViewBoardList;

  @Input()
  set calendarViewBoardList(updates) {
    this._calendarViewBoardList = updates;
    this.updateFilteredTimeSlots();
  }

  constructor(private eventService: EventServiceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.updateTimeSlots(this.eventService.timeslots);
    console.log(this.dayItems);
    this.eventService.getTimeslots().subscribe(timeslots => {
      this.updateTimeSlots(timeslots);
    });

  }

  ngAfterViewInit() {
  }

  updateFilteredTimeSlots() {
    this.dayItems.forEach(day => {
      day.filteredTimeslots = [];
      day.timeslots.sort(function(a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
      day.timeslots.forEach(timeslot => {
        if (this._calendarViewBoardList[timeslot.board.name]) {
          day.filteredTimeslots.push(timeslot);
        }
      });
    });
  }

  updateTimeSlots(newTimeslots: Timeslot[]) {
    this.dayItems.forEach(day => {
      day.timeslots = [];
    });
    newTimeslots.forEach(timeslot => {
      console.log('Adding timeslot : ' + timeslot);
      this.dayItems.forEach(day => {
        if (day.day === timeslot.weekday) {
          day.timeslots.push(timeslot);
        }
      });
    });
    this.updateFilteredTimeSlots();
  }

  openDialog(timeslot: Timeslot) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {timeslot};
    const dialogRef = this.dialog.open(CreateTimeslotComponent, dialogConfig);
  }

}
