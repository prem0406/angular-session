import { Component, Input } from "@angular/core";
import { TodoItem } from '../../model/todo-item.interface';

@Component({
    selector: "app-ng-for",
    templateUrl: "./ng-for.component.html",
    styleUrls: ["./ng-for.component.css"]
})
export class NgForComponent{
    @Input()
    todos: TodoItem[]

}