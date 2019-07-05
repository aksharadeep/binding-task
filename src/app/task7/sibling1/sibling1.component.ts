import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
user: string;
newUser: string;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.myMessage.subscribe(user => this.user = user);
  }
  editThisUser() {
    this.usersService.editUser(this.newUser);
  }

}
