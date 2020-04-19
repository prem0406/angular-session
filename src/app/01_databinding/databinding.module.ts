import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './containers/databinding.component';



@NgModule({
  declarations: [
    DatabindingComponent
  ],
  exports : [
    DatabindingComponent
  ]
  
})
export class DatabindingModule { }
