import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attach',
  templateUrl: './attach.component.html',
  styleUrls: ['./attach.component.css']
})
export class AttachComponent {

  constructor() { }

  @Input('userItem') userItem: {name: string, gender: string, age: string, mob_on_dem: boolean, carId: string, demandId: string};

}
