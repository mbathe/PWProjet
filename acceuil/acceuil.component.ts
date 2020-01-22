import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})


export class AcceuilComponent implements OnInit {
  @Input()
  src:string="favicon.ico";
  @Input()
  profil:string="profil";
  constructor() { }

  ngOnInit() {

  }

}
