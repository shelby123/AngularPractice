import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PathParamComponent } from './path-param/path-param.component';
import { FormsComponent } from './forms/forms.component';
import { FormHolderComponent } from './form-holder/form-holder.component';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { RouteGuardTargetComponent } from './route-guard-target/route-guard-target.component';
import { TestGuard } from './services/test.guard';
import { MaterialModule } from '../shared/material.module';
import { RouteGuardRedirectComponent } from './route-guard-redirect/route-guard-redirect.component';

@NgModule({
  declarations: [
    LandingComponentComponent,
    PathParamComponent,
    FormsComponent,
    FormHolderComponent,
    RouteGuardComponent,
    RouteGuardTargetComponent,
    RouteGuardRedirectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
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
        {path:"forms", component:FormHolderComponent},
        {path:"guard", component:RouteGuardComponent},
        {
          path:"guard-target", 
          component:RouteGuardTargetComponent,
          canActivate: [TestGuard]
        },
        {path:"redirect", component:RouteGuardRedirectComponent}
      ]
    }
    ])
  ],
  providers: [
    TestGuard
  ]
})
export class AngularRoutingModule { }
