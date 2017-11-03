import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OncardPage } from '../oncard/oncard';
import { TwocardsPage } from '../twocards/twocards';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  
  welcome:string = "";
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams) { 

  }

  openPageOne(){
    this.navCtrl.push(OncardPage)
  }
 
  twoPageOne(){
    this.navCtrl.push(TwocardsPage)
  }

  ionViewDidLoad(){
    //this.saludo();
  }

}
