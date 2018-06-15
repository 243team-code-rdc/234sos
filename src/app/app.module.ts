import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AfficheResultatPage } from '../pages/affiche-resultat/affiche-resultat';
import { DetailsPlacePage } from '../pages/details-place/details-place';
import { ListePlacePage } from '../pages/liste-place/liste-place';
import { FirstimePage } from '../pages/firstime/firstime';
import { NativeStorage } from '@ionic-native/native-storage';
import { ResultatVidePage } from '../pages/resultat-vide/resultat-vide';
import { AproposPage } from '../pages/apropos/apropos';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { HomeFilmPage } from '../pages/home-film/home-film';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AfficheResultatPage,
    DetailsPlacePage,
    ListePlacePage,
    FirstimePage,
    ResultatVidePage,
    AproposPage,
    HomeFilmPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AfficheResultatPage,
    DetailsPlacePage,
    ListePlacePage,
    FirstimePage,
    ResultatVidePage,
    AproposPage,
    HomeFilmPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    SMS,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
