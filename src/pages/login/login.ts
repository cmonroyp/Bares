import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userText:string = "";
  pwd: any ="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.userText = 'Admin'
    this.pwd = '123'
  }

  login(){
    if (this.userText == 'Admin' && this.pwd == '123' ){       
      this.navCtrl.setRoot(MenuPage,{welcome:this.userText});
    }
  }

}
