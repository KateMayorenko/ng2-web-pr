import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { FormsModule} from '@angular/forms';
import { CarComponent } from './car/car.component';
import { AppRoutingModule} from './app-routing.module';
import { UserComponent} from './user/user.component';
import { PipeSearchPipe } from './pipe-search.pipe';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CarAddComponent } from './car-add/car-add.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAddComponent } from './user-add/user-add.component';




@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    CarComponent,
    UserComponent,
    PipeSearchPipe,
    TopMenuComponent,
    CarAddComponent,
    UsersPageComponent,
    HomePageComponent,
    UserAddComponent


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
