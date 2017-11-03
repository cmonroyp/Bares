import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OncardPage } from './../pages/oncard/oncard';
import { TwocardsPage } from './../pages/twocards/twocards';
import { ModalcommentPage } from '../pages/oncard/modalcomment/modalcomment';
import { ModalpositionPage } from '../pages/modalposition/modalposition';
import { ModalreservasPage } from '../pages/modalreservas/modalreservas';
import { MenuPage } from '../pages/menu/menu';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
   OncardPage,
    TwocardsPage,
    ModalcommentPage,
    ModalpositionPage,
    ModalreservasPage
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule, // Put ionic2-rating module here
    IonicModule.forRoot(MyApp,{
    scrollAssist: false, //hace que no se superponga ne los inputs.
    toastEnter:	'toast-slide-in',
    toastLeave:	'toast-slide-out',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    OncardPage,
    TwocardsPage,
    ModalcommentPage,
    ModalpositionPage,
    ModalreservasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
