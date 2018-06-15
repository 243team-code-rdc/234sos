import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListePlacePage } from './liste-place';

@NgModule({
  declarations: [
    ListePlacePage,
  ],
  imports: [
    IonicPageModule.forChild(ListePlacePage),
  ],
})
export class ListePlacePageModule {}
