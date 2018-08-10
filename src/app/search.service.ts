import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';


@Injectable()

export class SearchService {

  searchNote = '';

  constructor(private consoleSevice: ConsoleService) {}

  list: { name: string, date: string, attach: any, isRemoved: boolean}[] = [{
    name: 'Note about Family',
    date: '21.12.2014',
    attach: 'fileName',
    isRemoved: false

  },
    {
      name: 'Note about Life',
      date: '21.12.2015',
      attach: 'fileName',
      isRemoved: false
    },
    {
      name: 'Note about Work',
      date: '21.12.2016',
      attach: 'fileName',
      isRemoved: false
    }];

  files: { name: string}[] = [];


  addNote(name: string, date: string, attach: any, isRemoved: boolean) {

    this.list.push({
      name,
      date,
      attach,
      isRemoved: false

    });

    this.consoleSevice.log(`${name}`);

  }

  addFiles(name: string) {
    this.files.push({
      name
    });
  }

}
