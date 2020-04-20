import { Component, Input, Output,EventEmitter } from "@angular/core";
import { TodoItem } from '../models/todo-item.interface';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']

})
export class TodoComponent{
    @Input()
    data : TodoItem

    @Output()
    descriptionChanged = new EventEmitter<string>()

    description : string

    onSubmit(){
        this.descriptionChanged.emit(this.description)
    }

    // onDescriptionInput(event: KeyboardEvent) {
    //     const text = event.target as HTMLInputElement
    //     this.description = text.value
    // }

    onDescriptionInput(description: string) {
        this.description = description
    }

}