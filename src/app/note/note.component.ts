import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {SearchService} from '../search.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent implements OnInit {


 @Input() carItem: {model: string, engine: string, system: string, design: string, location: string};

 getClass() {
    return{

      'list-group-item-success' : true

    };
  }

  constructor(private service: SearchService) {}

  ngOnInit() {
  }

  removeCar(note, index) {
    this.service.cars.splice(index, 1);

  }

}
