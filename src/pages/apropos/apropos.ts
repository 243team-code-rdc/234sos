import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
 

/**
 * Generated class for the AproposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apropos',
  templateUrl: 'apropos.html',
})
export class AproposPage {

  message_env:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private sms: SMS,private callNumber: CallNumber) {
  }

   

  message_box() {
    let prompt = this.alertCtrl.create({
      title: 'Envoyer a 243sos',
      message: "Taper votre message ou suggestion ou rapport d'erreur",
      inputs: [
        {
          name: 'mot',
          placeholder: 'Message'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('message annuler');
          }
        },
        {
          text: 'Envoyer',
          handler: data => {
            this.sms.send('0990666768', data.mot);
          }
        }
      ]
    });
    prompt.present();
  }

  appler_moi()
  {
    this.callNumber.callNumber("+243990666768", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

}
