import {NgModule} from '@angular/core';
import {NotesComponent} from './notes-page/notes.component';
import {AttachComponent} from './attach/attach.component';
import {RouterModule, Routes} from '@angular/router';
import {LinksComponent} from './links-page/links.component';

const appRoutes: Routes = [

  /*localhost:4200/notes-page*/

  {
    path: 'notes', component: NotesComponent

  },

  {
    path: '', component: NotesComponent

  },


  /*localhost:4200/attach*/
  {
    path: 'link', component: LinksComponent
  }];

@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}
