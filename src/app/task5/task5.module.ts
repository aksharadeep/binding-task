import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MiddleComponent } from './middle/middle.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [MainComponent, MiddleComponent, SubComponent],
  imports: [
    CommonModule
  ],
  exports: [MainComponent, MiddleComponent, SubComponent]
})
export class Task5Module { }
