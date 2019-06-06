import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EventServiceService } from '../event-service.service';
import { Timeslot, Board } from './timeslot';
import { WeekDay } from '@angular/common';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-create-timeslot',
  templateUrl: './create-timeslot.component.html',
  styleUrls: ['./create-timeslot.component.scss']
})
export class CreateTimeslotComponent implements OnInit {

  timeslotForm: FormGroup;
  boards:Board[]

  createNew:boolean

  weekdayKeys = Object.keys
  weekdays = WeekDay
  get keys() : Array<string> { 
    var keys = this.weekdayKeys(this.weekdays); 
    return keys.slice(keys.length / 2); 
  } 


  timeslot:Timeslot 

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<CreateTimeslotComponent>, private eventService: EventServiceService,
     private boardService: BoardService) { }

  ngOnInit() {
    this.boards =  this.boardService.boards
    this.createNew = this.data === null
    if(this.createNew) {
      this.timeslotForm = this.fb.group({
        board:"",
        weekday:"",
        hour: ["3", [Validators.pattern("([1-9]|1[0-9]|2[0-3])"), Validators.required]],
        minute:["00", [Validators.pattern("([0-9])"), Validators.required]],
        amOrPm:""
      })
    } else {
      console.log(this.data.timeslot.weekday)
      this.timeslot = this.data.timeslot
      this.timeslotForm = this.fb.group({
        board: "",
        weekday: "",
        hour: [this.data.timeslot.hour, [Validators.pattern("([1-9]|1[0-9]|2[0-3])"), Validators.required]],
        minute:[this.data.timeslot.minute, [Validators.pattern("([0-9])"), Validators.required]],
        amOrPm: "am"
      })
      this.timeslotForm.get('board').setValue(this.data.timeslot.board, {onlySelf: true})
      this.timeslotForm.get('weekday').setValue(this.data.timeslot.weekday, {onlySelf: true})
    }
    

  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveEvent() {
    console.log(" am or pm " + this.timeslotForm.get('amOrPm').value)
    let hour = +this.timeslotForm.get("hour").value
    if(this.timeslotForm.get("amOrPm").value == 'pm') {
      hour = hour + 12
    }
    let date = new Date()
    date.setHours(hour)
    date.setMinutes(+this.timeslotForm.get("minute").value)
    if(this.createNew) {
      this.timeslotForm.get('weekday').value.forEach(weekday => {
        this.buildTimeslot(weekday, date, hour)
        this.eventService.addTimeslot(this.timeslot)
      })
    } else {
      let weekday = this.timeslotForm.get('weekday').value
      this.buildTimeslot(weekday, date, hour, this.timeslot.id)
      let result = this.eventService.updateTimeslot(this.timeslot)
    }
  }

  private buildTimeslot(weekday, date, hour, id?) {
    this.timeslot = {
      board : this.timeslotForm.get("board").value,
      date : date,
      weekday : weekday,
      hour : hour,
      minute : +this.timeslotForm.get("minute").value,
      id : id
    }
  }
}
