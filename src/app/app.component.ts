import {Component} from '@angular/core';
import {SearchService} from './search.service';
import {ConsoleService} from './console.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService, ConsoleService]
})
export class AppComponent {
  title = 'Fast Notebook';

  constructor(private service: SearchService) {}


}
