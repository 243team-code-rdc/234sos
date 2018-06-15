import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AfficheResultatPage } from '../pages/affiche-resultat/affiche-resultat';
import { DetailsPlacePage } from '../pages/details-place/details-place';
import { NativeStorage } from '@ionic-native/native-storage';
import { FirstimePage } from '../pages/firstime/firstime';
import { AproposPage } from '../pages/apropos/apropos';
import { HomeFilmPage } from '../pages/home-film/home-film';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
 
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private nativeStorage: NativeStorage) {
    
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acceuil', component: HomePage },
      { title: 'Cinema', component: HomeFilmPage },
      { title: 'A propos', component:  AproposPage}
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.get_info();
      //this.check_if_is_first();
      //this.not_first_time();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

 

 

}
