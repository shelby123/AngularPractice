import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

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
