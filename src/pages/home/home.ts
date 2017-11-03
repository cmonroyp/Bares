import { Component} from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { OncardPage } from '../oncard/oncard';
import { TwocardsPage } from '../twocards/twocards';


@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  
  welcome:string = "";
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams
            ) { 

  }

  // ionViewDidEnter(){
    
  //   this.statusBar.hide();
  // }

  openPageOne(){
    this.navCtrl.push(OncardPage)
  }
 
  twoPageOne(){
    this.navCtrl.push(TwocardsPage)
  }

  ionViewDidLoad(){
    //this.saludo();
  }

}
