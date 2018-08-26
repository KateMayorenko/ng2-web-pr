import {Injectable, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MainService} from './main.service';

@Injectable()

@Pipe({
  name: 'pipeSearch'
})
export class PipeSearchPipe implements PipeTransform, OnInit {


  constructor(private service: MainService) {}

  transform(_cars, searchStr: string) {
    this.service.cars = _cars;

    if (_cars.length === 0 || searchStr === '') {
      return _cars;
    }

    _cars.filter((item) => item.name === searchStr);
    console.log('pipe is working');
  }

  ngOnInit(){

  }

}
