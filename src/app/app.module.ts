import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes-page/notes.component';
import {FormsModule} from '@angular/forms';
import { NoteComponent } from './note/note.component';
import {AppRoutingModule} from './app-routing.module';
import {AttachComponent} from './attach/attach.component';
import { PipeSearchPipe } from './pipe-search.pipe';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { LinksComponent } from './links-page/links.component';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AttachComponent,
    PipeSearchPipe,
    TopMenuComponent,
    NoteAddComponent,
    LinksComponent,
    HomePageComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
