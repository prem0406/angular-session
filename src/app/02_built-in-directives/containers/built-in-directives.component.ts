import { Component } from "@angular/core";
import { TodoItem } from '../model/todo-item.interface';

@Component({
    selector: "app-built-in-directives",
    templateUrl: "./built-in-directives.component.html",
    styleUrls: ["./built-in-directives.component.css"]
})
export class BuiltInDirectivesComponent{
    todoItems: TodoItem[] = [
        {id: 1, text: 'Teach Typescript', completed: false},
        {id: 2, text: 'Teach Angular', completed: true},
        {id: 3, text: 'Teach Node', completed: false},
        {id: 4, text: 'Teach JavaScript', completed: true},
        {id: 5, text: 'Teach Css', completed: false},

    ]

    todos: TodoItem[]

    selectedTodo: TodoItem

    onTodoSelected(todo: TodoItem){
        this.selectedTodo = todo
    }

    onTodoClosed(){
        this.selectedTodo = null
    }
}