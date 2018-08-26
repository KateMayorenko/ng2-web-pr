import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {ConsoleService} from '../console.service';


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

  constructor(private service: MainService, private consoleService: ConsoleService) { }


  addUser(obj) {
    this.service.addUser(this.userName, this.userGender, this.userAge, this.mob_on_dem);

    obj = {
      name: this.userName,
      gender: this.userGender,
      age: this.userAge,
      mob: this.mob_on_dem,
    };

    this.service.setLocalStorage(obj, 'data');

    this.service.getFromLocalStorage(obj, 'data');

    this.userName = '';
    this.userGender = '';
    this.userAge = '';
    this.mob_on_dem = false;

  }

  submitForm(form: HTMLFormElement) {
   this.consoleService.log(form + ' is submitted');
  }

  ngOnInit() {
  }

}
