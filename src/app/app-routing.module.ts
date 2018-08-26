import {NgModule} from '@angular/core';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from './users-page/users-page.component';
import {HomePageComponent} from './home-page/home-page.component';


const appRoutes: Routes = [

  {
    path: '', component: HomePageComponent

  },

  {
    path: 'cars', component: CarsPageComponent

  },

  /*localhost:4200/user*/
  {
    path: 'users', component: UsersPageComponent
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
