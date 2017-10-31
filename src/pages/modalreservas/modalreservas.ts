import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';

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
  itemBar =[];
  obj:object;
  list:Array<any>= [
    {mesa:'mesa1',estado:[{state:'libre'}],checked:'false'},
    {mesa:'mesa2',estado:[{state:'lebre'}],checked:'false'},
    {mesa:'mesa3',estado:[{state:'reservada'}],checked:'true'},
    {mesa:'mesa4',estado:[{state:'libre'}],checked:'false'},
    {mesa:'mesa5',estado:[{state:'reservada'}],checked:'true'},
  ];

  state:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
              
       this.itemBar=  [this.navParams.get('res')];
  }

  ionViewDidLoad() {
    // for (var state of this.list) {
    //   console.log(state);
    //   if (state['checked'] === 'true') {
    //     this.reservasCheck = true;
    //     console.log('entro',this.reservasCheck);
    //   }
    // }
  }

  // prueba(){
  //   for (var state of this.list) {
  //     console.log(state);
  //     if (state['checked'] === 'true') {
  //       this.reservasCheck = true;
  //       console.log('entro',this.reservasCheck);
  //     }
  //   }
  // }

  checkReservas(statuscheck:any, data:any, idx:number){
      
    let toast = this.toastCtrl.create({
      message: `La mesa ${data.mesa} ha sido separada!.`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

      let confirm = this.alertCtrl.create({
      mode:'ios',
      title: 'Reservas?',
      message: 'Desea Reservar esta Mesa?.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
            this.obj ={
              mesa: data.mesa,
              estado: [{state:'libre'}],
              checked : 'false'
            }
            console.log('indice',this.list.indexOf(data));
            this.list.splice(this.list.indexOf(data),1,this.obj)
            console.log('Reservada',this.list);
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.obj ={
              mesa: data.mesa,
              estado: [{state:'reservada'}],
              checked : statuscheck
            }

            console.log('indice',this.list.indexOf(data));
            this.list.splice(this.list.indexOf(data),1,this.obj)
            console.log('Reservada',this.list);
            toast.present();
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
