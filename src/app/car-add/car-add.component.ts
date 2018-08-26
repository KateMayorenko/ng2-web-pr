import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
 // providers: [SearchService]
})

export class CarAddComponent implements OnInit {

  itemModel = '';
  itemEngine = '';
  itemSystem = '';
  itemDesign = '';
  itemLocation = '';
  _files = [];

// @Output('outputNote') outputNote = new EventEmitter<{name: string, date: string, user: any, isRemoved: boolean}>();

  constructor(private service: MainService) { }


  addCar(obj) {
    this.service.addCar(this.itemModel, this.itemEngine, this.itemSystem, this.itemDesign, this.itemLocation);

    obj = {
      model: this.itemModel,
      engine: this.itemEngine,
      system: this.itemSystem,
      design: this.itemDesign,
      location: this.itemLocation
    };

    this.service.setLocalStorage(obj, 'data');

    this.service.getFromLocalStorage(obj, 'data');

    this.itemModel = '';
    this.itemEngine = '';
    this.itemSystem = '';
    this.itemDesign = '';
    this.itemLocation = '';

  }

  ngOnInit() {


  }


}
