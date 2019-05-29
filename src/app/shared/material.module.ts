import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatAutocompleteModule, 
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
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
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule
  ]
})
export class MaterialModule { }
