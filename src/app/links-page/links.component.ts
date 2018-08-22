import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit{

  _users = [];

  constructor(private service: SearchService) {}

  ngOnInit() {
    this._users = this.service.users;
  }

}
