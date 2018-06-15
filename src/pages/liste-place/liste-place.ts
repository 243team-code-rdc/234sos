import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailsPlacePage } from '../details-place/details-place';

/**
 * Generated class for the ListePlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-place',
  templateUrl: 'liste-place.html',
})
export class ListePlacePage {

  place:string;
  postList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    this.place=this.navParams.get('type_p');
    this.get_place_type_of();
  }

  get_place_type_of() {
     
    var link = 'https://uzabintu.com/243sos/list_place.php';
    var myData = JSON.stringify({type_p: this.place});
    this.http.post(link, myData)
        .subscribe(data => {
            this.postList=JSON.parse(data['_body']);
            console.log(this.postList);
        }, error => {
          console.log(error);
        });
  }  

  go_to_place(id_p)
  {
    this.navCtrl.push(DetailsPlacePage,{id_place:id_p});
  }

}
