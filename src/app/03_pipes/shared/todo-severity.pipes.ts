import { PipeTransform, Pipe } from '@angular/core';
import { Severity } from '../model/todo.interface';

@Pipe({
    name: 'todoSeverity'
})
export class TodoSeverityPipes implements PipeTransform{
    transform(value: number){
        return Severity[value] || ''
    }
}