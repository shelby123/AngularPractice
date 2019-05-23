import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html',
  styleUrls: ['./parent-child-communication.component.css']
})
export class ParentChildCommunicationComponent implements OnInit, AfterViewInit {

  parentTextAreaKey:String="hello";

  childMessageString:String="";

  childChangingMessage:String="";

  @ViewChild(ChildComponent) childComponent:ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.childMessageString = this.childComponent.childDataProperty;
  }

  updateChildMessageDisplay(message:string) {
    this.childChangingMessage=message;
  }

}
