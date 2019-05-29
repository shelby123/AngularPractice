import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Pin } from './PinModel';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pinId', 'likes', 'saves'];
  elements:Pin[] = []
  dataSource: MatTableDataSource<Pin>;


  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {

    for(var i= 0; i < 25; i++) {
      this.elements.push({pinId:""+i, likes:i*3 + i%4, saves:i + i%4})
    }
    
    this.dataSource = new MatTableDataSource<Pin>(this.elements);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
