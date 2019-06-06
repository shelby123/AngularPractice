import { Injectable } from '@angular/core';
import { Board } from './create-timeslot/timeslot';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private _boards:Board[] = [
    { 
      name: "sweets",
      color: "#fffcb7"
    },
    {
      name: "charms",
      color: "#b5fcc7"
    },
    {
      name: "Desserts", 
      color: "#deb5fc"
    }

  ]

  constructor() { }

  get boards(): Board[] {
    return this._boards
  }
}
