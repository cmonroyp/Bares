import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BARES } from '../../data/bar.datamodel';
import { ModalcommentPage } from './modalcomment/modalcomment';



@IonicPage()
@Component({
  selector: 'page-oncard',
  templateUrl: 'oncard.html',
})
export class OncardPage {

  _urlImage:string = "https://source.unsplash.com/800x600?/?bar?="
  //_urlImage:string = "https://unsplash.com/photos/iwWJFIlnDm4"
  imagesunsplash:any[] = [];

  //rate:number =3.5;  
  like:number = 12
  nolike:number = 3
  countComent:number;
  informacion:any[]= [];

  comments =[
    {idx:0,comment:'Me gusto mucho, la atencion es excelente lo voy a recomendar a mis amigos.'},
    {idx:1,comment:'Lo Recomiendo'},
    {idx:2,comment:'No me Agrado'},
    {idx:3,comment:'Falta Mejorar'}
  ] 

  rate =[
    {1:'No me gustó en Absoluto.',comment:''},
    {2:'No me gustó.',comment:''},
    {3:'Está Bien.',comment:''},
    {4:'Me gustó.',comment:''},
    {5:'Me encantó.',comment:''}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
    this.informacion = BARES;
    console.log(this.informacion)
    // this.carga_imagenes();
    this.countComent = this.comments.length;
  }
  // carga_imagenes(){
    
  //           return new Promise((resolve, reject)=>{
  //              for(let i = 0; i < 6; i++){
  //                  this.imagesunsplash = [
  //                      ... this.imagesunsplash,{url:this._urlImage + i}
  //                  ]
  //               }   
  //                  console.log(this.imagesunsplash)
  //                 resolve(true);
  //          })
  //      }

  onModelChange(event:any,data:any,index:number){
    // console.log(event)
    // console.log(index)
    this.prueba(data,index);
  }

  prueba(items,idx){

   let object ={
      name:items.name,
      rate: items.rate,
      img: items.img,
      like: items.like,
      nolike:items.nolike,
      calification: items.calification + 1 ,
      address: items.address,
      comments: items.comments
    }

   this.informacion.splice(idx, 1,object);

    console.log(this.informacion)

  }

  likeClick(){
    this.like += 1;
  }

  nolikeClick(){
    this.nolike += 1;
  }

  openCommentsModal(data:any){
    console.log('data enviada',data)
    let modal = this.modalCtrl.create(ModalcommentPage,{'comment': data});
    modal.present();
  }

}
