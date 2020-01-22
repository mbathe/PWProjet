import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  naisssance:String;
  name:String;
  surname:String;
  Sexe:String;
  photo:File;
  photoupload:File;
  nomBd:String="Wiston";
  prenomBd:String="Churchil";
  naissanceBd:String="07/01/2011";
  SexeBd:String="MASCULIN"
  
  @Input()
  src:String

  

  constructor() { }

  
   choisir () {
    
      document.getElementById("imageUpload").click();
      var tp=document.getElementById("profileImage");
      tp=document.getElementById("imageUpload")

      
      

      
}
  

   Envoyer() {
var name=this.name;
var surname=this.surname;
var dateofbirth=this.naisssance;
var  sexe=this.Sexe;
var photo=this.photo;



  }
  
  


  ngOnInit() {
  }

}
