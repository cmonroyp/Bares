import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalcomment',
  templateUrl: 'modalcomment.html',
})
export class ModalcommentPage {
  character;
  comments:any[] =[];
  datosRecibidos:object ={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {

              }
              
  ionViewDidLoad() {
    this.comments = this.navParams.get('comment');
    this.datosRecibidos = this.comments;
    console.log(this.comments);
    console.log('datos recibidos',this.datosRecibidos);
}

  closeModal() {    
        this.viewCtrl.dismiss();
      }

}
