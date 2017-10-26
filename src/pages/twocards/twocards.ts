import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-twocards',
  templateUrl: 'twocards.html',
})
export class TwocardsPage {

  _urlImage:string = "https://source.unsplash.com/800x600?/?bar?="
  imagesunsplash:any[] = [];

  rate:number =3.5;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.carga_imagenes();
  }
  carga_imagenes(){
    
            return new Promise((resolve, reject)=>{
               for(let i = 0; i < 6; i++){
                   this.imagesunsplash = [
                       ... this.imagesunsplash,{url:this._urlImage + i}
                   ]
                }   
                   console.log(this.imagesunsplash)
                  resolve(true);
           })
       }

  onModelChange(event:any){
    console.log(event)
  }

}
