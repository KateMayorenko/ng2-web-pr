import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';
import {PipeSearchPipe} from './pipe-search.pipe';


@Injectable()

export class MainService  {

  searchNote = '';

  constructor(private consoleService: ConsoleService) {
}

  cars: {
      model: string, engine: string, system: any, design: string, location: string}[] = [{
    model: 'Audi',
    engine: 'unknown',
    system: 'yes',
    design: 'Colored',
    location: 'Munich',

    }];


  users: { name: string, gender: string, age: string, mob_on_dem: boolean}[] = [
    {
      name: 'John',
      gender: 'Male',
      age: '21',
      mob_on_dem: false,

  }
  ];

  addCar(model: string, engine: string, system: any, design: string, location: string) {

    this.cars.push({
      model,
      engine,
      system,
      design,
      location

    });


  }
  addUser(name: string, gender: string, age: string, mob_on_dem: boolean) {

    this.users.push({
      name,
      gender,
      age,
      mob_on_dem

    });


  }

  setLocalStorage(carItem, carStr) {

    carStr = JSON.stringify(carItem);
    localStorage.setItem('data', carStr);
  }

  getFromLocalStorage(finalItem, finalStr) {

    finalStr = localStorage.getItem('data');
    finalItem = JSON.parse(finalStr);
  }


  /*removeCar(item, index) {
    this.cars.splice(index, 1);
  }*/

 /* changeItemInCars() {


    console.log('change car is pushed');
  }*/

}
