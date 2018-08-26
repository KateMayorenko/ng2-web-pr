import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
/*  providers : [SearchService]*/
})
export class TopMenuComponent implements OnInit {

  _searchNote = '';

  constructor(private service: MainService) {}

  ngOnInit() {
    this._searchNote = this.service.searchNote;




  }


}
