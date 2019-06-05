import { WeekDay } from '@angular/common';


export interface Timeslot {
    board: Board
    date: Date
    weekday: WeekDay
    hour: number
    minute: number
}

export interface Board {
    name: string
    color
}