import { Component, OnInit } from '@angular/core';
import { Pin } from './PinModel';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  displayedColumns: string[] = ['pinId', 'likes', 'saves'];
  dataSource:Pin[] = []

  constructor() { }

  ngOnInit() {

    this.dataSource.push({pinId:"1", likes:20, saves:4})
    this.dataSource.push({pinId:"2", likes:100, saves:30})
    this.dataSource.push({pinId:"3", likes:42, saves:1})
  }

}
