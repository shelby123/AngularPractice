import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateTimeslotComponent } from './create-timeslot/create-timeslot.component';
import { Subject } from 'rxjs';
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
  },
  cyan: {
    primary: '#42f4e5',
    secondary: '#2940aa'
  }
};

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
    // {
    //   title: 'Editable event',
    //   color: colors.yellow,
    //   start: new Date(),
    //   actions: [
    //     {
    //       label: '<i class="fa fa-fw fa-pencil"></i>',
    //       onClick: ({ event }: { event: CalendarEvent }): void => {
    //         console.log('Edit event', event);
    //       }
    //     }
    //   ]
    // },
    // {
    //   title: 'Deletable event',
    //   color: colors.blue,
    //   start: new Date(),
    //   actions: [
    //     {
    //       label: '<i class="fa fa-fw fa-times"></i>',
    //       onClick: ({ event }: { event: CalendarEvent }): void => {
    //         this.events = this.events.filter(iEvent => iEvent !== event);
    //         console.log('Event deleted', event);
    //       }
    //     }
    //   ]
    // },
    // {
    //   title: 'Non editable and deletable event',
    //   color: colors.red,
    //   start: new Date(), 
    // }
  ];

  constructor(private fb: FormBuilder, private dialog:MatDialog) {
  }

  boardObjects = [
    { 
      name: "sweets",
      color: colors.cyan
    },
    {
      name: "charms",
      color: colors.blue
    },
    {
      name: "Desserts", 
      color: colors.red
    }

  ]


  get boards(): FormArray {
    return this.toggleBoardDisplay.get("boards") as FormArray;
  }

  ngOnInit(): void {
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
      boardGroup.valueChanges.subscribe(changed=>{
        this.filterEvents()
      })
    })
    this.filterEvents()
    console.log(this.toggleBoardDisplay.get("boards"))
  }

  filterEvents() {
    let filter = {}
    this.boards.controls.forEach(control => {
      filter[control.get('name').value] = control.get('checked').value
    })
    console.log(filter)
    this.filteredEvents = []
    this.events.forEach(item=>{
      this.filteredEvents.push(item);
    })
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {boards: this.boardObjects}

    let dialogRef = this.dialog.open(CreateTimeslotComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.addEvent(result);
    });
  }

  addEvent(board) {
    this.events.push({
      title: board.name,
      color: board.color,
      start: new Date('2019-06-04T03:00:00')
    })
    this.filterEvents()
    this.refresh.next()
  }

}
