import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {SearchService} from '../search.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent implements OnInit {


 @Input() noteItem: {name: string, date: string, attach: any, type: string, isRemoved: boolean};

 getClass() {
    return{
      'list-group-item' : !this.noteItem.isRemoved,
      'hidden' : this.noteItem.isRemoved,
      'list-group-item-success' : true

    };
  }

  constructor(private service: SearchService) {}

  ngOnInit() {
  }

  removeNote(note, index) {
    this.service.list.splice(index, 1);
    this.service.files.splice(index, 1);
  }





}
