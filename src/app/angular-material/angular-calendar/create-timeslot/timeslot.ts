import { WeekDay } from '@angular/common';


export interface Timeslot {
    board: Board;
    date: Date;
    weekday: string;
    hour: number; // always in military time
    minute: number;
    id: string;
}

export interface Board {
    name: string;
    color: string;
}
