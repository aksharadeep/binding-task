import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  @Output() public middleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getMessage(value) {
    this.middleEvent.emit(value);
  }
}
