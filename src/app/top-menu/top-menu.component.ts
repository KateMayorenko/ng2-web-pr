import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
/*  providers : [SearchService]*/
})
export class TopMenuComponent implements OnInit {

  _searchNote = '';

  constructor(private service: SearchService) {}

  ngOnInit() {
    this._searchNote = this.service.searchNote;




  }


}
