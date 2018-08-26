import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {MainService} from '../main.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})


export class CarComponent implements OnInit {


 @Input() carItem: {model: string, engine: string, system: string, design: string, location: string};

 getClass() {
    return{

      'list-group-item' : true

    };
  }

  constructor(private service: MainService) {}

  ngOnInit() {
  }

  removeCar(car, index) {
    this.service.cars.splice(index, 1);

  }

}
