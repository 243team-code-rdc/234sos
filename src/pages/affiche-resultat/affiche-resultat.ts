import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailsPlacePage } from '../details-place/details-place';

/**
 * Generated class for the AfficheResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affiche-resultat',
  templateUrl: 'affiche-resultat.html',
})
export class AfficheResultatPage {

  valeur:string;
  data:any = {};
  postList:any;
  aucun:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    this.valeur=this.navParams.get('mot_clef_search');
    this.search();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfficheResultatPage');

  }


  search() {
    console.log(this.valeur);
    var link = 'https://uzabintu.com/243sos/get_search.php';
    var myData = JSON.stringify({mot_key: this.valeur});
    this.http.post(link, myData)
        .subscribe(data => {
          if(this.valeur.trim().length>0){
            this.postList=JSON.parse(data['_body']);
             
            console.log(this.postList);
          }
          else
          {
            console.log('vide');
          }
         
          
        }, error => {
          console.log(error);
        });
  }  

  go_to_details(id)
  {
    this.navCtrl.push(DetailsPlacePage,{id_place:id});
  }



}
