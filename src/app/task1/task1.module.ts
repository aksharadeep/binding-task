import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1/task1.component';

@NgModule({
  declarations: [Task1Component],
  imports: [
    CommonModule
  ],
  exports: [Task1Component]
})
export class Task1Module { }
