import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
 // providers: [SearchService]
})

export class NotesComponent implements OnInit {

  _searchNote = '';
  _list = [];
  _files = [];
 /* list: { name: string, date: string, attach: any, isRemoved: boolean}[] = [{
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
    }];*/

  constructor(private service: SearchService) { }

/*  updateNoteList(note: {name: string, date: string, attach: any, isRemoved: boolean}) {
      this._list.push(note);
      this._files.push(note.attach);

  }*/

  ngOnInit() {

    this._files = this.service.files;
    this._list = this.service.list;
    this._searchNote = this.service.searchNote;

   // console.log(this._list);


  }
}
