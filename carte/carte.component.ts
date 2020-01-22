import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { timeout } from 'q';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  title = 'frugal-map';
  lat:number;
  // tslint:disable-next-line:member-ordering
  long:number;
   myfrugalmap :any;
   result:any;
   
  constructor(private http: HttpClient){
   
  }
 
  getPosts(){
    console.log('sa marche');

    }
    test2(){
      var ROOT_URL ='http://api.openweathermap.org/data/2.5/forecast?lat='+this.lat+'&lon='+this.long+'&cnt=40&mode=json&units=metric&lang=fr&appid=c40939646ab584205151948aba1b7027';

      this.http.get<any>(ROOT_URL).subscribe((reponse)=>{
        
        this.result = JSON.parse(JSON.stringify(reponse));
		    console.log(this.result.list[2].main.temp+' prevision')
      
     },(erro)=>{
      console.log('erreur'+erro);
     });
    }
  ngOnInit() {
     this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
 
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myfrugalmap);
   
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
       var theMarker={};
       this.myfrugalmap .on("click", (e)=>{
        this.lat=e.latlng.lat;
        this.long= e.latlng.lng;
        console.log(this.lat+" "+this.long);
         
        if (theMarker != undefined) {
          this.myfrugalmap.removeLayer(theMarker);
        };

    //Add a marker to show where you clicked.
     theMarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(this.myfrugalmap); 
    
        this.test2();
       });
  }
 
  
  http1:HttpClient;
  
   markerOnClick(e) {
    var http2:HttpClient;
    
    console.log(this.lat+" "+this.long)
    console.log(this.http1);
    
  }

}
