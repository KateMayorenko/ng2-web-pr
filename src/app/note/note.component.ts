import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent {

  constructor() { }

 @Input() noteItem: {name: string, date: string, attach: any, isRemoved: boolean};

  removeNote() {


  }

  changeNote() {


    console.log('change note is pushed');
  }

  addCategory() {

    console.log('add category is pushed');
  }

  getClass() {
    return{
      'list-group-item' : !this.noteItem.isRemoved,
      'hidden' : this.noteItem.isRemoved,
      'list-group-item-success' : true

    };
  }
}
