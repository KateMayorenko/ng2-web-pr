import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
 // providers: [SearchService]
})

export class NoteAddComponent implements OnInit {

  itemModel = '';
  itemEngine = '';
  itemSystem = '';
  itemDesign = '';
  itemLocation = '';
  _files = [];

// @Output('outputNote') outputNote = new EventEmitter<{name: string, date: string, attach: any, isRemoved: boolean}>();

  constructor(private service: SearchService) { }


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
