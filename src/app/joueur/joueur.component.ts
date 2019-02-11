import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  
  cartes = [
    {
      number: "2",
      color: "c",
      joker: false
    },
    {
      number: "J",
      color: "h",
      joker: false
    },
    {
      number: "7",
      color: "d",
      joker: false
    },
    {
      number: "2",
      color: "s",
      joker: false
    }
  ]  

  constructor() { }

  ngOnInit() {

  }

}
