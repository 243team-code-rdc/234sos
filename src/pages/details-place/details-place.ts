import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the DetailsPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@IonicPage()
@Component({
  selector: 'page-details-place',
  templateUrl: 'details-place.html',
})

export class DetailsPlacePage {

  id_p:any;
  postList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,public toastCtrl: ToastController) {
    this.id_p=this.navParams.get('id_place');
    this.more_about_place();
  }
  
  more_about_place() {
     
    var link = 'https://uzabintu.com/243sos/get_places_by_id.php';
    var myData = JSON.stringify({id_place: this.id_p});
    this.http.post(link, myData)
        .subscribe(data => {
            this.postList=JSON.parse(data['_body']);
            console.log(this.postList);
        }, error => {
          console.log(error);
        });
  }  

  public debuter_navigation() {
    let toast = this.toastCtrl.create({
      message: 'systeme de nagivation bientot disponible',
      duration: 3000
    });
    toast.present();
  }






}
