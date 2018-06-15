import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Http } from "@angular/http";
import { AfficheResultatPage } from '../affiche-resultat/affiche-resultat';
import { ListePlacePage } from '../liste-place/liste-place';
import { ResultatVidePage } from '../resultat-vide/resultat-vide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any = {};
  nb_result=0;
  nb_result_list=0;
  //public rootPage: any = HomePage;
  
  @ViewChild(Slides) slides: Slides;

  postList:any;
  ListPost:any;
  ListRestult:any;
  constructor(public navCtrl: NavController,private http: Http) {
    this.data.mot_clef='';
    this.get_much_categorie();
  }

  public slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==4){
      //this.slides.stopAutoplay();
    }
  }

  
  redirection()
  {
    
    if(this.data.mot_clef.trim().length>0)
    {
     
      this.count_result();
      if(this.nb_result==0)
      {
          this.navCtrl.push(ResultatVidePage);
      }
      else
      {
          this.navCtrl.push(AfficheResultatPage,{mot_clef_search: this.data.mot_clef});
      }
      
    }
  }

  go_to_list_id(desti)
  {
      this.cout_list_place(desti);
      if(this.nb_result_list==0)
      {
        this.navCtrl.push(ResultatVidePage);
      }
      else
      {
        this.navCtrl.push(ListePlacePage,{type_p:desti});
      }
    
  }

  get_much_categorie() {
     
    var link = 'https://uzabintu.com/243sos/get_categorie.php';
    var myData = JSON.stringify({});
    this.http.post(link, myData)
        .subscribe(data => {
           
            this.postList=JSON.parse(data['_body']);
            console.log(this.postList);
      
      
          
        }, error => {
          console.log(error);
        });
  }  

 
  count_result() {
    
    var link = 'https://uzabintu.com/243sos/get_search.php';
    var myData = JSON.stringify({mot_key: this.data.mot_clef});
    this.http.post(link, myData)
        .subscribe(data => {
          if(this.data.mot_clef.trim().length>0){
            this.ListPost=JSON.parse(data['_body']);
            this.nb_result=this.ListPost.length;
          }
      }, error => {
          console.log(error);
    });
  }  

  cout_list_place(destin) {
     
    var link = 'https://uzabintu.com/243sos/list_place.php';
    var myData = JSON.stringify({type_p: destin});
    this.http.post(link, myData)
        .subscribe(data => {
            this.ListRestult=JSON.parse(data['_body']);
            this.nb_result_list=this.ListRestult.length;
        }, error => {
          console.log(error);
        });
  }  



  

}
