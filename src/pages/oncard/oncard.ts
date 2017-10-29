import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { BARES } from '../../data/bar.datamodel';
import { ModalcommentPage } from './modalcomment/modalcomment';
import { ModalpositionPage } from '../modalposition/modalposition';
import { ModalreservasPage } from '../modalreservas/modalreservas';

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

  searchQuery: string = '';
  data:any;
  //position =[];

  comments =[
    {idx:0,comment:'Me gusto mucho, la atencion es excelente lo voy a recomendar a mis amigos.'},
    {idx:1,comment:'Lo Recomiendo'},
    {idx:2,comment:'No me Agrado'},
    {idx:3,comment:'Falta Mejorar'}
  ] 

  // rate =[
  //   {1:'No me gustó en Absoluto.',comment:''},
  //   {2:'No me gustó.',comment:''},
  //   {3:'Está Bien.',comment:''},
  //   {4:'Me gustó.',comment:''},
  //   {5:'Me encantó.',comment:''}
  // ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController) {
  }

  cambios(){
    console.log(this.data)
  }
  ionViewDidLoad(){
    this.listado_Bares();
    console.log(this.informacion)
    // this.carga_imagenes();
    this.countComent = this.comments.length;
  }

  listado_Bares(){
    this.informacion = BARES;
  }

  //barra de busqueda
  getItems(ev: any){

    this.listado_Bares();

    let val = ev.target.value;
    if(val && val.trim() != ''){
      this.informacion = this.informacion.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

  optionsBar(info:any){
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccione una Opcion.');

    alert.addInput({
      type: 'radio',
      label: 'Ubicacion',
      value: 'position',
      //checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Reservas',
      value: 'reservas',
     // checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: option => {
        console.log('Radio data:', option);
        this.sendOptions(info,option);
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    
    alert.present();
  }
  
  sendOptions(info:any,option:any){
console.log(info)
    switch (option) {
      case 'position':
        //this.position = info;
        
        let modal = this.modalCtrl.create(ModalpositionPage,{'pos': info});
            modal.present();
        break;
    
      case 'reservas' :
      let modalReserva = this.modalCtrl.create(ModalreservasPage,{'res': info});
          modalReserva.present();
        break;

      default:
        break;
    }

    // if(option == 'position'){

    // }
    // for (let item of datos) {
    //   if(option = item)
    //     this.position = option;
    //     console.log(this.position)
    // }
    // console.log('informacion a enviar', info);
    // console.log('indice array', idx);
    // console.log('opcion seleccionada', option);
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

  // onModelChange(event:any,data:any,index:number){
  //   // console.log(event)
  //   // console.log(index)
  //   // this.prueba(data,index);
  // }

  qualitylike(items,idx){

  let likeQuality:number = ++items['like'];    
   let object ={
      name:items.name,
      rate: items.rate,
      img: items.img,
      like: likeQuality,
      nolike: items.nolike,
      calification: items.calification ,
      address: items.address,
      comments: items.comments
    }

   this.informacion.splice(idx, 1,object);

  }

  noqualitylike(items,idx){
    
      let nolikeQuality:number = ++items['nolike'];    
       let object ={
          name:items.name,
          rate: items.rate,
          img: items.img,
          like: items.like,
          nolike: nolikeQuality,
          calification: items.calification ,
          address: items.address,
          comments: items.comments
        }
    
       this.informacion.splice(idx, 1,object);
    
      }

  likeClick(data:any,idx:number){
    this.qualitylike(data,idx);
  }

  nolikeClick(data:any,idx:number){
    this.noqualitylike(data,idx);
  }

  openCommentsModal(data:any,idx:number){
    console.log('data enviada',data,idx)
    let modal = this.modalCtrl.create(ModalcommentPage,{'comment': data});

    modal.onDidDismiss((data)=>{
      if(data){
        this.informacion.splice(idx,1,data);
      }
      console.log('datos que llegan',data)
    })
    modal.present();
  }

}
