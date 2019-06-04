import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss']
})
export class AngularCalendarComponent implements OnInit {
  
  view: string = 'week';

  viewDate: Date = new Date();

  toggleBoardDisplay:FormGroup;

  events: CalendarEvent[] = [
    {
      title: 'Editable event',
      color: colors.yellow,
      start: new Date(),
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        }
      ]
    },
    {
      title: 'Deletable event',
      color: colors.blue,
      start: new Date(),
      actions: [
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      title: 'Non editable and deletable event',
      color: colors.red,
      start: new Date()
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  boardNames:string[] = ["sweets", "charms", "Desserts"];

  get boards():FormArray {
    return this.toggleBoardDisplay.get("boards") as FormArray;
  }

  ngOnInit(): void {
    this.toggleBoardDisplay = this.fb.group({
      boards: this.fb.array([])
    })
    let boardArray = this.toggleBoardDisplay.get("boards") as FormArray
    this.boardNames.forEach(val=> {
      const boardGroup = this.fb.group({
        name: false
      })
      boardArray.push(boardGroup)
    })
    console.log(this.toggleBoardDisplay.get("boards"))

  }

}
