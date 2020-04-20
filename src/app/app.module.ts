import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingModule } from './01_databinding/databinding.module';
import {BuiltInDirectivesModule } from './02_built-in-directives/built-in-directives.module';

const FEATURE_MODULES_TAUGHT = [
  //DatabindingModule,
  BuiltInDirectivesModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...FEATURE_MODULES_TAUGHT
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
