import { NgModule } from "@angular/core";
import { BuiltInDirectivesComponent } from './containers/built-in-directives.component';
import { NgForComponent } from './components/01_ng-for/ng-for.component';
import { NgIfComponent } from './components/02_ng-if/ng-if.component';
import { NgSwitchComponent } from './components/03_ng-switch/ng-switch.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        BuiltInDirectivesComponent,
        NgForComponent,
        NgIfComponent,
        NgSwitchComponent
    ],
    exports: [
        BuiltInDirectivesComponent
    ],
    imports:[
        CommonModule
    ]
})
export class BuiltInDirectivesModule{

}