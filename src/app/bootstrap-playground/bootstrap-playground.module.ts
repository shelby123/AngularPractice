import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapPlaygroundComponent } from './bootstrap-playground.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BootstrapColorComponent } from './bootstrap-color/bootstrap-color.component';
import { BootstrapJumbotronComponent } from './bootstrap-jumbotron/bootstrap-jumbotron.component';
import { BootstrapBreakpointsComponent } from './bootstrap-breakpoints/bootstrap-breakpoints.component';

@NgModule({
  declarations: [
    BootstrapPlaygroundComponent, 
    BootstrapColorComponent, 
    BootstrapJumbotronComponent, 
    BootstrapBreakpointsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([
      {
        path:"bootstrap", 
        component: BootstrapPlaygroundComponent,
        children: [
          {path:"colors", component:BootstrapColorComponent},
          {path:"jumbotron", component:BootstrapJumbotronComponent},
          {path:"breakpoint", component:BootstrapBreakpointsComponent},
        ]
      }
    ])
  ]
})
export class BootstrapPlaygroundModule { }
