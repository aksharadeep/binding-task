import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, Sibling1Component, Sibling2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [UsersService],
  exports: [ParentComponent, Sibling1Component, Sibling2Component]
})
export class Task7Module { }
