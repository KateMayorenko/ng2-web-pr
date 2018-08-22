import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userName = '';
  userGender = '';
  userAge = '';
  mob_on_dem: false;

  constructor(private service: SearchService) { }


  addUser(obj) {
    this.service.addUser(this.userName, this.userGender, this.userAge, this.mob_on_dem);

    obj = {
      model: this.userName,
      engine: this.userGender,
      system: this.userAge,
      design: this.mob_on_dem,
    };

    this.service.setLocalStorage(obj, 'data');

    this.service.getFromLocalStorage(obj, 'data');

    this.userName = '';
    this.userGender = '';
    this.userAge = '';
    this.mob_on_dem = false;

  }

  ngOnInit() {
  }

}
