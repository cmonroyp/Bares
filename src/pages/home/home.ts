import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OncardPage } from '../oncard/oncard';
import { TwocardsPage } from '../twocards/twocards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPageOne(){
    this.navCtrl.push(OncardPage)
  }
 
  twoPageOne(){
    this.navCtrl.push(TwocardsPage)
  }

}
