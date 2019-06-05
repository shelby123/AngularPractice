import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  days:string[] = ['Sunday', 'Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday']
  dayColors = ['#e9baff', '#ff9ee0', '#fcd999', '#fcf7b5', '#b7f9b3', '#bacaff', '#e9baff' ]
  dayItems:string[][] = [[], ["item 1"], [], ["sample", "sample2"], [], [], []]

  @Input()
  calendarViewBoardList

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.calendarViewBoardList['sweets'])
  }

}
