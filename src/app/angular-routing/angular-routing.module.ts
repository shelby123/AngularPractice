import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PathParamComponent } from './path-param/path-param.component';
import { FormsComponent } from './forms/forms.component';
import { FormHolderComponent } from './form-holder/form-holder.component';

@NgModule({
  declarations: [
    LandingComponentComponent,
    PathParamComponent,
    FormsComponent,
    FormHolderComponent
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
        {path:"forms", component:FormHolderComponent}
      ]
    }
    ])
  ]
})
export class AngularRoutingModule { }
