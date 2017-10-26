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

  rateUser =[
    {idx:1, valor:'No me gustó en Absoluto.',comment:''},
    {idx:2,valor:'No me gustó.',comment:''},
    {idx:3,valor:'Está Bien.',comment:''},
    {idx:4,valor:'Me gustó.',comment:''},
    {idx:5,valor:'Me encantó.',comment:''}
  ]
  valor:string;
  character;
  comments:any[] =[];
  comment:string="";
  datosRecibidos:object ={};
  rate:number = 0;
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

      

onModelChange(event:any){

  for (var key of this.rateUser) {
    if (event == key.idx ) {
      this.valor = key.valor;
      
    }
  }

}

}
