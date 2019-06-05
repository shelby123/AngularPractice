import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EventServiceService } from '../event-service.service';
import { Timeslot } from './timeslot';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-create-timeslot',
  templateUrl: './create-timeslot.component.html',
  styleUrls: ['./create-timeslot.component.scss']
})
export class CreateTimeslotComponent implements OnInit {

  timeslotForm: FormGroup;
  boards:string[]

  weekdayKeys = Object.keys
  weekdays = WeekDay
  get keys() : Array<string> { 
    var keys = this.weekdayKeys(this.weekdays); 
    return keys.slice(keys.length / 2); 
  } 


  timeslot:Timeslot 

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<CreateTimeslotComponent>, private eventService: EventServiceService) { }

  ngOnInit() {
    this.boards = this.data.boards
    this.timeslotForm = this.fb.group({
      board:"",
      weekday:"",
      hour: ["3", [Validators.pattern("([1-9]|1[0-9]|2[0-3])"), Validators.required]],
      minute:["00", [Validators.pattern("([0-9])"), Validators.required]],
      amOrPm:""
    })

  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveEvent() {
    console.log(this.timeslotForm.get('amOrPm').value)
    this.timeslotForm.get('weekday').value.forEach(weekday => {
      this.timeslot = {
        board : this.timeslotForm.get("board").value,
        date : new Date(),
        weekday : weekday,
        hour : +this.timeslotForm.get("hour").value,
        minute : +this.timeslotForm.get("minute").value
      }
      this.eventService.addTimeslot(this.timeslot)
    })
  }
}
