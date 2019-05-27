import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PathParamComponent } from './path-param/path-param.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    LandingComponentComponent,
    PathParamComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([ {
      path:"routing", 
      children: [
        {
            path:"landing", 
            component: LandingComponentComponent,
            children: [
              {path:":id", component: PathParamComponent},
            ]
        },
        {path:"", redirectTo:"landing", pathMatch:"full"},
        {path:"forms", component:FormsComponent}
      ]
    }
    ])
  ]
})
export class AngularRoutingModule { }
