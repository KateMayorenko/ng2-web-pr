import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';


@Injectable()

export class SearchService {

  searchNote = '';

  constructor(private consoleSevice: ConsoleService) {}

  list: {
      name: string, date: string, attach: any, type: string, isRemoved: boolean}[] = [{
      name: 'Note about Family',
      date: '21.12.2014',
      attach: 'fileName',
      type: 'Home',
      isRemoved: false

    },
      {
        name: 'Note about Life',
        date: '21.12.2015',
        attach: 'fileName',
        type: 'Home',
        isRemoved: false
      },
      {
        name: 'Note about Work',
        date: '21.12.2016',
        attach: 'fileName',
        type: 'Home',
        isRemoved: false
      }];


  files: { name: string}[] = [];

  addNote(name: string, date: string, attach: any, type: string, isRemoved: boolean) {

    this.list.push({
      name,
      date,
      attach,
      type,
      isRemoved: false

    });

    this.consoleSevice.log(localStorage.getItem(name));

  }

  setLocalStorage(noteItem, noteStr) {

    noteStr = JSON.stringify(noteItem);
    localStorage.setItem('data', noteStr);
  }

  getFromLocalStorage(finalItem, finalStr) {

    finalStr = localStorage.getItem('data');
    finalItem = JSON.parse(finalStr);
  }

  addFiles(name: string) {
    this.files.push({
      name
    });
  }




  /*removeNote(item, index) {
    this.list.splice(index, 1);
  }*/

 /* changeNoteInList() {


    console.log('change note is pushed');
  }*/

}
