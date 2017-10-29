import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalpositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalposition',
  templateUrl: 'modalposition.html',
})
export class ModalpositionPage {

  posicion = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
    this.posicion = [this.navParams.get('pos')]
    console.log('llegan',this.posicion)
  }

  closeModal() {
    //if( this.object != null ){
      //console.log('entro lleno')
      this.viewCtrl.dismiss();
    //}
    // else
    // {
    //   console.log('entro vacio')
    //   this.viewCtrl.dismiss();
    // }
  }

}
