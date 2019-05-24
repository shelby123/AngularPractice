import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapPlaygroundComponent } from './bootstrap-playground.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BootstrapColorComponent } from './bootstrap-color/bootstrap-color.component';
import { BootstrapJumbotronComponent } from './bootstrap-jumbotron/bootstrap-jumbotron.component';
import { BootstrapBreakpointsComponent } from './bootstrap-breakpoints/bootstrap-breakpoints.component';
import { BootstrapBordersComponent } from './bootstrap-borders/bootstrap-borders.component';
import { BootstrapSpacingComponent } from './bootstrap-spacing/bootstrap-spacing.component';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-forms.component';
import { BootstrapInputGroupsComponent } from './bootstrap-input-groups/bootstrap-input-groups.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { BootstrapFlexComponent } from './bootstrap-flex/bootstrap-flex.component';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';

@NgModule({
  declarations: [
    BootstrapPlaygroundComponent, 
    BootstrapColorComponent, 
    BootstrapJumbotronComponent, 
    BootstrapBreakpointsComponent, 
    BootstrapBordersComponent, 
    BootstrapSpacingComponent, 
    BootstrapFormsComponent, 
    BootstrapInputGroupsComponent, 
    BootstrapNavbarComponent, 
    BootstrapFlexComponent, 
    BootstrapGridComponent
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
          {path:"borders", component:BootstrapBordersComponent},
          {path:"spacing", component:BootstrapSpacingComponent},
          {path:"forms", component:BootstrapFormsComponent},
          {path:"inputGroups", component:BootstrapInputGroupsComponent},
          {path:"navs", component:BootstrapNavbarComponent},
          {path:"flex", component:BootstrapFlexComponent},
          {path:"grid", component:BootstrapGridComponent},
        ]
      }
    ])
  ]
})
export class BootstrapPlaygroundModule { }
