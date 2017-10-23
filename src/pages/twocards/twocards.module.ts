import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwocardsPage } from './twocards';

@NgModule({
  declarations: [
    TwocardsPage,
  ],
  imports: [
    IonicPageModule.forChild(TwocardsPage),
  ],
})
export class TwocardsPageModule {}
