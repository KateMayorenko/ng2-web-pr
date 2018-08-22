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
  _cars = [];
  _users = [];


  constructor(private service: SearchService) { }

  ngOnInit() {

    this._users = this.service.users;
    this._cars = this.service.cars;



  }
}
