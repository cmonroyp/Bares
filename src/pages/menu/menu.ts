import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { OncardPage } from '../oncard/oncard';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages: Array<{ title: string, component: any , icon:any}>;

  welcome:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) {

    this.welcome = this.navParams.get('welcome');
    console.log(this.welcome);
    
    this.pages = [
      { title: 'Home', component: HomePage,icon:'home' },
      { title: 'Bares', component: OncardPage,icon:'beer' },
      { title: 'Sign in', component: 'LoginPage',icon:'ios-key' },
     // { title: 'Signup', component: 'SignupPage' },
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     this.nav.setRoot(page.component);
    //this.nav.push(page.component);
  }

  ionViewDidLoad(){
   //this.saludo();
  }

  saludo(){
    
    let toast = this.toastCtrl.create({      
      message: `Bienvenido ${this.welcome}!.`,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
