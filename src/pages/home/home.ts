import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { OncardPage } from '../oncard/oncard';
import { TwocardsPage } from '../twocards/twocards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  welcome:string = "";
  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              public navParams: NavParams) {

       this.welcome = this.navParams.get('welcome');
  }

  openPageOne(){
    this.navCtrl.push(OncardPage)
  }
 
  twoPageOne(){
    this.navCtrl.push(TwocardsPage)
  }

  ionViewDidLoad(){
    this.saludo();
  }

  saludo(){
    
    let toast = this.toastCtrl.create({      
      message: `Bienvenido ${this.welcome}!.`,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
