import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPlacePage } from './details-place';

@NgModule({
  declarations: [
    DetailsPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPlacePage),
  ],
})
export class DetailsPlacePageModule {}
