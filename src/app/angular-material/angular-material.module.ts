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
import { HttpClientModule } from '@angular/common/http';
import { MatTableResolver } from './mat-table/mat-table.resolver';
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateTimeslotComponent } from './angular-calendar/create-timeslot/create-timeslot.component';
import { CalendarComponent } from './angular-calendar/calendar/calendar.component';
import { CalendarResolverService } from './angular-calendar/calendar-resolver.service';
import { EventServiceService } from './angular-calendar/event-service.service';



@NgModule({
  declarations: [
    LandingComponent, 
    AutocompleteComponent, 
    InputComponent, 
    MatTableComponent, AngularCalendarComponent, CreateTimeslotComponent, CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([
      {
        path:"material", 
        component: LandingComponent,
        children: [
          {path:"autocomplete", component:AutocompleteComponent},
          {path:"input", component:InputComponent},
          {path:"table", component:MatTableComponent, resolve: {etsyResolver: MatTableResolver}},
          {path:"calendar", component:AngularCalendarComponent, resolve: {calendarResolver: EventServiceService}}
        ]
      }
    ])
  ],
  providers: [
    MatTableResolver
  ],
  entryComponents:[
    CreateTimeslotComponent
  ]
})
export class AngularMaterialModule { }
