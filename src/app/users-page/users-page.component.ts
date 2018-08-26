import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  _users = [];

  constructor(private service: MainService) {}

  ngOnInit() {
    this._users = this.service.users;
  }

}
