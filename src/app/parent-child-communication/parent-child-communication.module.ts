import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildCommunicationComponent } from './parent-child-communication.component';
import { ChildComponent } from './child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ParentChildCommunicationComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
      {path:'parentChild', component: ParentChildCommunicationComponent},    
    ])
  ]
})
export class ParentChildCommunicationModule { }
