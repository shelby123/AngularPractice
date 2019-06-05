import { WeekDay } from '@angular/common';


export interface Timeslot {
    board: Board
    date: Date
    weekday: string
    hour: number
    minute: number
}

export interface Board {
    name: string
    color
}