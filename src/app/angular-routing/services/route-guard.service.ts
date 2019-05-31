import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {

  constructor() { }

  private _canActivate:boolean = false;

  get canActivate() {
    return this._canActivate;
  }

  set canActivate(canActivate:boolean) {
    this._canActivate = canActivate
    console.log("guard service can activate set to " + this._canActivate)
  }

}
