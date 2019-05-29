import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MatTableComponent } from './mat-table/mat-table.component';

@NgModule({
  declarations: [
    LandingComponent, 
    AutocompleteComponent, 
    InputComponent, 
    MatTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:"material", 
        component: LandingComponent,
        children: [
          {path:"autocomplete", component:AutocompleteComponent},
          {path:"input", component:InputComponent},
          {path:"table", component:MatTableComponent}
        ]
      }
    ])
  ]
})
export class AngularMaterialModule { }