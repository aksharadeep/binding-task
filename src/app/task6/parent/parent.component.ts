import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public message = '';
  constructor() { }

  ngOnInit() {
  }
  myMessage(value) {
    this.message = value;
    }
}
