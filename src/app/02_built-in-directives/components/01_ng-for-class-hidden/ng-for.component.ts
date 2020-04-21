import { Component, Input,EventEmitter, Output  } from "@angular/core";
import { TodoItem } from '../../model/todo-item.interface';

@Component({
    selector: "app-ng-for",
    templateUrl: "./ng-for.component.html",
    styleUrls: ["./ng-for.component.css"]
})
export class NgForComponent{
    @Input()
    todos: TodoItem[]

    @Input()
    selectedTodo: TodoItem;

    @Output()
    todoSelected = new EventEmitter<TodoItem>()

    hiddenTable = false

    onCardHeaderClick(){
        this.hiddenTable = !this.hiddenTable
    }

    onSelectedTodo(todo: TodoItem){
        this.todoSelected.emit(todo)
    }

}