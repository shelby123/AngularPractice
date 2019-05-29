import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  myGroup:FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myGroup = this.fb.group({
      text:"",
      color:"",
      email: "",
      name: ["", [Validators.required]]
    })
  }

}
