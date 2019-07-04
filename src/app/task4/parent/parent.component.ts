import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public myMessage = ' ';
  constructor() { }

  ngOnInit() {
  }

}
