import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modalcomment',
  templateUrl: 'modalcomment.html',
})
export class ModalcommentPage {

  rateUser =[
    {idx:1, valor:'No me gustó en Absoluto.'},
    {idx:2,valor:'No me gustó.'},
    {idx:3,valor:'Está Bien.'},
    {idx:4,valor:'Me gustó.'},
    {idx:5,valor:'Me encantó.'}
  ]

  comentarios=[];

  valor:string;

  comments:any[] =[];
  comment:string="";
  datosRecibidos:object ={};
  object:object;
  rate:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {

              }

  ionViewDidLoad() {
    this.comments = [this.navParams.get('comment')];
    this.datosRecibidos = this.comments[0];
    this.comentarios = this.comments[0].comments
    // console.log('comentarios' , this.comentarios);
    // console.log(this.comments);
    // console.log('datos recibidos',this.datosRecibidos);
}

  closeModal() {
        if( this.object != null ){
          console.log('entro lleno')
          this.viewCtrl.dismiss(this.object);
        }
        else
        {
          console.log('entro vacio')
          this.viewCtrl.dismiss();
        }
      }

      

onModelChange(event:any){

  for (var key of this.rateUser) {
    if (event == key.idx ) {
      this.valor = key.valor;
      
    }
  }
}


calification(rate:number,comment:any){

    this.comentarios.push({comment});
    let quality:number = this.datosRecibidos['calification']
    let start:number = this.datosRecibidos['rate']
    let startCalification:number =0;

      if(start < 5 ){
        startCalification =  (rate/50)+start
      }
      else{
        startCalification = start;
      }
    console.log(quality)
     this.object ={
      name: this.datosRecibidos['name'],
      rate: startCalification,
      img: this.datosRecibidos['img'],
      like: this.datosRecibidos['like'],
      nolike:this.datosRecibidos['nolike'],
      calification: quality + 1 ,
      address: this.datosRecibidos['address'],
      comments: this.comentarios ,
      valor:this.valor
  }
  this.comments.splice(0,1,this.object)
    console.log(this.comments)
  }

}
