import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  printMe(value) {
    this.myEvent.emit(value);
  }
}
