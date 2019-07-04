import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [Child1Component, Child2Component, ParentComponent],
  imports: [
    CommonModule
  ],
  exports: [Child1Component, Child2Component, ParentComponent]
})
export class Task6Module { }
