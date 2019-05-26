import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ {
      path:"routing", 
      children: [
        {path:"landing", component: LandingComponentComponent}
      ]
    }
    ])
  ]
})
export class AngularRoutingModule { }
