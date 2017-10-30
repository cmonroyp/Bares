import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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

  reservasCheck:boolean;

  list:Array<any>= [
    {mesa:'mesa1',estado:[{state:'libre'}],checked:'false'},
    {mesa:'mesa2',estado:[{state:'reservada'}],checked:'true'},
    {mesa:'mesa3',estado:[{state:'reservada'}],checked:'true'},
    {mesa:'mesa4',estado:[{state:'libre'}],checked:'false'},
    {mesa:'mesa5',estado:[{state:'reservada'}],checked:'true'},
  ];

  state:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController) {
              //console.log(this.list)
  }

  ionViewDidLoad() {
    for (var state of this.list) {
      console.log(state);
      if (state['checked'] === 'true') {
        this.reservasCheck = true;
        console.log('entro',this.reservasCheck);
      }
    }
  }

  checkReservas(check:any){
    let confirm = this.alertCtrl.create({
      title: 'Reservas?',
      message: 'Desea Reservar esta Mesa?.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this. reservasCheck = check;
            console.log(this.reservasCheck)
          }
        }
      ]
    });
    confirm.present();
  
    
  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
