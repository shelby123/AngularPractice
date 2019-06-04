import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-timeslot',
  templateUrl: './create-timeslot.component.html',
  styleUrls: ['./create-timeslot.component.scss']
})
export class CreateTimeslotComponent implements OnInit {

  timeslotForm: FormGroup;
  boards:string[]

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<CreateTimeslotComponent>) { }

  ngOnInit() {
    this.boards = this.data.boards
    this.timeslotForm = this.fb.group({
      board:""

    })

  }

  closeDialog() {
    this.dialogRef.close(this.timeslotForm.get('board').value);
  }

}
