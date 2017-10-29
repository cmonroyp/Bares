import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalreservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalreservas',
  templateUrl: 'modalreservas.html',
})
export class ModalreservasPage {

  list:Array<any>= [
    {mesa:'mesa1',estado:[{state:'libre'}]},
    {mesa:'mesa2',estado:[{state:'reservada'}]},
    {mesa:'mesa3',estado:[{state:'reservada'}]},
    {mesa:'mesa4',estado:[{state:'libre'}]},
    {mesa:'mesa5',estado:[{state:'reservada'}]},
  ];

  state:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {
              console.log(this.list)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalreservasPage');
  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
