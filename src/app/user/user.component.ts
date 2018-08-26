import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  constructor(private service: MainService) { }

  @Input('userItem') userItem: {name: string, gender: string, age: string, mob_on_dem: boolean, carId: string, demandId: string};

  removeUser(user, index) {
    this.service.users.splice(index, 1);

  }


}
