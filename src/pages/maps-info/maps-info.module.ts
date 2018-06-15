import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsInfoPage } from './maps-info';

@NgModule({
  declarations: [
    MapsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsInfoPage),
  ],
})
export class MapsInfoPageModule {}
