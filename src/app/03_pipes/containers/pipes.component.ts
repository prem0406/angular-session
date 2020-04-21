import { Component } from "@angular/core";
import { Todo, Severity } from '../model/todo.interface';

@Component({
    selector: "app-pipes",
    templateUrl: "./pipes.component.html",
    styleUrls: ["./pipes.component.css"]
})
export class PipesComponent{
    todos : Todo[] = [
        {
            id: 1,
            text : 'Teach Angular',
            targetDate: new Date(2020, 7, 2),
            completed : false,
            severity: Severity.MINOR,
            amountPenalized: 4
        },
        {
            id: 2,
            text : 'Teach TypeScript',
            targetDate: new Date(2020, 8, 3),
            completed : true,
            severity: Severity.MAJOR,
            amountPenalized: 5
        },
        {
            id: 3,
            text : 'Teach JavaScript',
            targetDate: new Date(2020, 7, 4),
            completed : false,
            severity: Severity.CRITICAL,
            amountPenalized: 7
        },
        {
            id: 4,
            text : 'Teach Node',
            targetDate: new Date(2020, 7, 7),
            completed : true,
            severity: Severity.MINOR,
            amountPenalized: 10
        },
        {
            id: 5,
            text : 'Teach HTML',
            targetDate: new Date(2020, 7, 17),
            completed : false,
            severity: Severity.CRITICAL,
            amountPenalized: 20
        }
    ]
}