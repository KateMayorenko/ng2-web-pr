import {Component} from '@angular/core';
import {MainService} from './main.service';
import {ConsoleService} from './console.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService, ConsoleService]
})
export class AppComponent {
  title = 'Car Service';

  constructor(private service: MainService) {}


}
