import { NgModule } from '@angular/core';
import { PipesComponent } from './containers/pipes.component';
import { CommonModule } from '@angular/common';
import { TodoStatusPipes } from './shared/todo-status.pipes';
import { TodoSeverityPipes } from './shared/todo-severity.pipes';

@NgModule({
    declarations: [
        PipesComponent,
        TodoStatusPipes,
        TodoSeverityPipes
    ],
    imports :[
        CommonModule
    ],
    exports: [
        PipesComponent
    ]
})
export class PipesModules{

}