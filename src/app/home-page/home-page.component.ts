import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  _cars = [];
  _users = [];

  constructor(private service: SearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._cars = this.service.cars;
    this._users = this.service.users;
  }


  openAttachPage() {
    this.router.navigate(['links'], {relativeTo: this.route});

  }

  openNotePage() {
    this.router.navigate(['cars'], {relativeTo: this.route});
  }


}
