import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childInputStringDataBind:string
  changestoChildInputString:number=0
  childInputStringPrev:string
  childInputStringNew:string

  childDataProperty="This String is defined in the child component";

  @Output() childMessageEvent:EventEmitter<string> = new EventEmitter<string>();

  private _childTextAreaKey:string
  get childTextAreaKey():string {
    return this._childTextAreaKey
  }
  set childTextAreaKey(val:string) {
    this._childTextAreaKey = val
    this.childMessageEvent.emit(val);
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['childInputStringDataBind']) {
      this.changestoChildInputString++;
      this.childInputStringPrev=changes['childInputStringDataBind'].previousValue
      this.childInputStringNew=changes['childInputStringDataBind'].currentValue
    }
  }
}
