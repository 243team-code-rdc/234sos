import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstimePage } from './firstime';

@NgModule({
  declarations: [
    FirstimePage,
  ],
  imports: [
    IonicPageModule.forChild(FirstimePage),
  ],
})
export class FirstimePageModule {}
