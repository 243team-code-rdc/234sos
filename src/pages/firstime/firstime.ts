import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the FirstimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstime',
  templateUrl: 'firstime.html',
})
export class FirstimePage {

  mon_token:any;
  token:any;
  

  slides = [
    {
      title: "Retrouver",
      description: "retrouvez-vous  <b>dans une ville facilement grace a 243sos</b> lassez-vous quider par nous.",
      image: "assets/imgs/fonds/three.png",
    },
    {
      title: "Informez-vous",
      description: "<b>Besoins d'informations?</b> 243sos vous donne toutes les informations necessaire sur un lieu.",
      image: "assets/imgs/fonds/two.png",
    },
    {
      title: "Demander une assistance",
      description: "Vous etes perdu? <b>On vous guide</b>laissez vous guider pour arriver a votre destination.",
      image: "assets/imgs/fonds/four.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeStorage: NativeStorage,public toastCtrl: ToastController) {
    
   // this.not_first_time();
   //this.get_id_user();
   this.one();
   this.get_id_user();
  }


  one()
  {
    this.nativeStorage.getItem('my_token')
          .then(
              data =>{
                  this.token= data.key_token;
              },
              error => console.error(error)
      );
  }

  get_id_user()
  {
      if(this.token!=null)
      {
        this.make_toast('Le token est -> '+this.token);
      }
      else
      {
          var tok="781227";
          this.nativeStorage.setItem('my_token', {
            key_token: tok,
            
        })
        .then(
            () => console.log('informations sauvegarder avec success'),
            error => console.error('Impossible de creer suite a cette erreur->', error)
        );
        this.make_toast("token creer avec success");
      }
     
  }

  go_to_home()
  {
    this.navCtrl.setRoot(HomePage);
  }




 make_toast(mess) {
  let toast = this.toastCtrl.create({
    message: mess,
    duration: 4000
  });
  toast.present();
}


}
