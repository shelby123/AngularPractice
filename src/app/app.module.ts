import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ParentChildCommunicationModule } from './parent-child-communication/parent-child-communication.module';
import { BootstrapPlaygroundModule } from './bootstrap-playground/bootstrap-playground.module';
import { AngularRoutingModule } from './angular-routing/angular-routing.module';
import { MaterialModule } from './shared/material.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';


import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { LoginComponent } from './okta/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config = {
  issuer: 'https://dev-715740.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/loginsuccess',
  clientId: ''
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( [
      {path:'', component: AppComponent},
      {path:"login", component: LoginComponent},
      {
        path: 'loginsuccess',
        component: OktaCallbackComponent
      },
    ]),
    ParentChildCommunicationModule,
    BootstrapPlaygroundModule,
    AngularRoutingModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
