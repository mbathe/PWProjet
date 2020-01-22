import { Component, OnInit } from '@angular/core';
import {ItemComponent} from '../item/item.component';
import{FirstComponent} from '../firstComponent/firstComponent.component';
import {CommunicationService} from '../app.communication.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'] 
})
export class ListViewComponent implements OnInit {

  data:object[]=[];
  taille:number=0;
  receiveResult:any;
  jour1:string="lundi";
  jour2:string="mardi";
  jour3:string="mercredi";
  jour4:string="jeudi";
  jour5:string="vendredi";
  
  constructor(private serv:CommunicationService) { 
      



  }
  //*******************JAVASCRIPT FOR CSS********************//
  
// When the user clicks on the button, open the modal 
  open() {
     var modal = document.getElementById('myModal');
      modal.style.display = "block";
  var mod = document.getElementById('mod');
      mod.style.width ="900";
      mod.style.height ="600";
  }
  close(){
    var modal = document.getElementById('myModal');
      modal.style.display = "none";
  }
//**********************END OF JAVASCRIPT**********************//


  transformDataString(json:string):object{
   var data:object;
      data=JSON.parse(json);
    return data;
  }
  transformDataArray(json:string):object[]{
    var data:object[]=[];
    var i:number;
    var tab:object[];
    data=JSON.parse(json).ville;
    return data;
  }
  associationUnique(obj:object)
  {
    this.data.unshift(obj);
    //console.log(this.data);

  }
  associationGroup(obj:object[]){
    var i:number;
    for(i=0;i<obj.length;i++){
      this.associationUnique(obj[i]);
    }
    this.taille=(this.data.length/5)+1;
  }
  dateTime(date:number):string{
   var h= new Date(date*1000).toLocaleTimeString().slice(0,5);
   var j=new Date(date*1000).toDateString().slice(0,10);
   return j+"\n"+"  "+h;
  }
  ngOnInit() {
    
      console.log(this.dateTime(1200478559));
      this.serv.receivedResult.subscribe((param:any)=>{
      this.receiveResult=param;
      this.ngOnInit();
    }); 
  // When the user clicks anywhere outside of the modal, close it
      //var tmp =this.transformDataString(new FirstComponent().donnee);
      //this.associationUnique(tmp);
      
      this.data=this.receiveResult.list;
  }
  }
  

