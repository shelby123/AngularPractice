import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatAutocompleteModule, 
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
