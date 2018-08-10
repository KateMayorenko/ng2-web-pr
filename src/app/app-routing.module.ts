import {NgModule} from '@angular/core';
import {NotesComponent} from './notes/notes.component';
import {AttachComponent} from './attach/attach.component';
import {RouterModule, Routes} from '@angular/router';
import {LinksComponent} from './links/links.component';

const appRoutes: Routes = [

  /*localhost:4200/notes*/

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
