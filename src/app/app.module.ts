import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ParentChildCommunicationModule } from './parent-child-communication/parent-child-communication.module';
import { BootstrapPlaygroundModule } from './bootstrap-playground/bootstrap-playground.module';
import { AngularRoutingModule } from './angular-routing/angular-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot( [
      {path:'', component: AppComponent}
    ]),
    ParentChildCommunicationModule,
    BootstrapPlaygroundModule,
    AngularRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
