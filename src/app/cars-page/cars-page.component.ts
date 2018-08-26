import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../main.service';


@Component({
  selector: 'app-notes',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css'],
 // providers: [SearchService]
})

export class CarsPageComponent implements OnInit {

  _searchNote = '';
  _cars = [];


  constructor(private service: MainService) { }

  ngOnInit() {

      this._cars = this.service.cars;



  }
}
