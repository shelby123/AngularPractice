import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html',
  styleUrls: ['./parent-child-communication.component.css']
})
export class ParentChildCommunicationComponent implements OnInit {

  parentTextAreaKey:String="hello";


  constructor() { }

  ngOnInit() {
  }

}
