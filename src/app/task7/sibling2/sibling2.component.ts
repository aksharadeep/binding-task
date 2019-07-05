import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  user: string;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.myMessage.subscribe(user => this.user = user);
  }


}
