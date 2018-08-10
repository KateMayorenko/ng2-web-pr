import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {SearchService} from './search.service';

@Injectable()

@Pipe({
  name: 'pipeSearch'
})
export class PipeSearchPipe implements PipeTransform {

  constructor(private service: SearchService) {}

  transform(_list, searchStr: string) {

    if (_list.length === 0 || searchStr === '') {
      return _list;
    }

    _list.filter((item) => item.name === searchStr);
    console.log('pipe is working');
  }

}
