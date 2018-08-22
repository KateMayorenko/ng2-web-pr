import {NgModule} from '@angular/core';
import {NotesComponent} from './notes-page/notes.component';
import {RouterModule, Routes} from '@angular/router';
import {LinksComponent} from './links-page/links.component';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [

  {
    path: '', component: HomePageComponent

  },

  {
    path: 'cars', component: NotesComponent

  },

  /*localhost:4200/attach*/
  {
    path: 'links', component: LinksComponent
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
