import { Injectable } from '@angular/core';
import { Board } from './create-timeslot/timeslot';
import { colors } from './colors';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private _boards:Board[] = [
    { 
      name: "sweets",
      color: colors.cyan
    },
    {
      name: "charms",
      color: colors.blue
    },
    {
      name: "Desserts", 
      color: colors.red
    }

  ]

  constructor() { }

  get boards(): Board[] {
    return this._boards
  }
}
