import { NgModule } from "@angular/core";
import { BuiltInDirectivesComponent } from './containers/built-in-directives.component';
import { NgForComponent } from './components/01_ng-for-class-hidden/ng-for.component';
import { NgIfComponent } from './components/02_ng-if-switch/ng-if.component';
import { NgIfTemplateComponent} from './components/03_ng-if-template/ng-if-template.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        BuiltInDirectivesComponent,
        NgForComponent,
        NgIfComponent,
        NgIfTemplateComponent
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