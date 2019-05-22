import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ParentChildCommunicationComponent } from './parent-child-communication/parent-child-communication.component';
import { ChildComponent } from './parent-child-communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildCommunicationComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot( [
      {path:'parentChild', component: ParentChildCommunicationComponent},
      {path:'', component: AppComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
