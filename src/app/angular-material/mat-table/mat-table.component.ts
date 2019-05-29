import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Pin } from './PinModel';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { EtsyPost } from './EtsyModel';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'imageUrl', 'id',  'datePosted'];
  elements: EtsyPost[] = []
  dataSource: MatTableDataSource<EtsyPost>;



  selection: SelectionModel<EtsyPost>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {

    for (var i = 0; i < 3; i++) {
      this.elements.push({ id:"" + i, imageUrl: "https://images.unsplash.com/photo-1553349450-06122450f171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80", datePosted: new Date()})
    }

    this.dataSource = new MatTableDataSource<EtsyPost>(this.elements);

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<EtsyPost>(allowMultiSelect, initialSelection);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EtsyPost): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${0 + 1}`;
  }
  logSelected() {
    console.log(this.selection.selected)
  }
}
