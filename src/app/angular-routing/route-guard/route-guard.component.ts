import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteGuardService } from '../services/route-guard.service';

@Component({
  selector: 'app-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.scss']
})
export class RouteGuardComponent implements OnInit {

  canActivateControl:FormControl = new FormControl();

  constructor(private routeGuard: RouteGuardService) { }

  ngOnInit() {
    this.routeGuard.canActivate = false;
    this.canActivateControl.valueChanges.subscribe(value => {
        console.log(value)
        this.routeGuard.canActivate = !this.routeGuard.canActivate;
    })
  }

}
