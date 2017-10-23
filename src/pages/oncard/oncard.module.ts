import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OncardPage } from './oncard';

@NgModule({
  declarations: [
    OncardPage,
  ],
  imports: [
    IonicPageModule.forChild(OncardPage),
  ],
})
export class OncardPageModule {}
