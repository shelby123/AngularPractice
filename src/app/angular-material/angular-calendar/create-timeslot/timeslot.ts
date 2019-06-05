import { WeekDay } from '@angular/common';


export interface Timeslot {
    board: Board
    date: Date
    weekday: WeekDay
}

export interface Board {
    name: string
    color
}