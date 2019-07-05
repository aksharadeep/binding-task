import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2/task2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ Task2Component]
})
export class Task2Module { }
