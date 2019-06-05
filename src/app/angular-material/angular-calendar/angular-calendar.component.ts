import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateTimeslotComponent } from './create-timeslot/create-timeslot.component';
import { Subject } from 'rxjs';
import { BoardService } from './board.service';
import { Board, Timeslot } from './create-timeslot/timeslot';
import { EventServiceService } from './event-service.service';
import { colors } from './colors';
import { addDaysWithExclusions } from 'angular-calendar/modules/common/util';
import { WeekDay } from '@angular/common';


@Component({ 
  selector: 'app-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss']
})
export class AngularCalendarComponent implements OnInit {

  view: string = 'week';
  
  refresh: Subject<any> = new Subject();

  viewDate: Date = new Date();

  toggleBoardDisplay: FormGroup;

  filteredEvents:CalendarEvent[] = []

  events: CalendarEvent[] = [
  ];

  constructor(private fb: FormBuilder, private dialog:MatDialog, 
      private boardService:BoardService, private eventService:EventServiceService) {
  }

  boardObjects:Board[]

  get boards(): FormArray {
    return this.toggleBoardDisplay.get("boards") as FormArray;
  }

  ngOnInit(): void {
    this.boardObjects = this.boardService.boards
    console.log(this.boardObjects)

    this.toggleBoardDisplay = this.fb.group({
      boards: this.fb.array([])
    })
    let boardArray = this.toggleBoardDisplay.get("boards") as FormArray
    this.boardObjects.forEach(val => {
      const boardGroup = this.fb.group({
        checked: true, 
        name: val.name
      })
      boardArray.push(boardGroup)
    })
    this.boards.valueChanges.subscribe(changes => {
      let boards:Board[] = changes.filter(x => x.checked)
      this.updateEvents(this.eventService.getTimeslots(boards.map(val=>val.name)))
    })
    this.updateEvents(this.eventService.getTimeslots())
  }

  addDays(date:Date, days:number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  updateEvents(timeslots:Timeslot[]) {
    this.filteredEvents = []
    timeslots.forEach(timeslot => {
      let newDate = new Date();
      newDate.setHours(timeslot.hour)
      newDate.setMinutes(timeslot.minute)
      // convert week day enum to number and find days to add / subtract
      let daysToAdd = (WeekDay[timeslot.weekday] as unknown as number) - newDate.getDay();
      this.filteredEvents.push({
        title: timeslot.board.name,
        color: timeslot.board.color,
        start: this.addDays(newDate, daysToAdd)
      })
    })
    this.refresh.next()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {boards: this.boardObjects}
    let dialogRef = this.dialog.open(CreateTimeslotComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.closeDialog();
    });
  }

  closeDialog() {
    this.updateEvents(this.eventService.getTimeslots())
  }

}

