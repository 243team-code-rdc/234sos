import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeFilmPage } from './home-film';

@NgModule({
  declarations: [
    HomeFilmPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeFilmPage),
  ],
})
export class HomeFilmPageModule {}
