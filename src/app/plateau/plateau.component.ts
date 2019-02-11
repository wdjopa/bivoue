import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit {

  adversaires = [
    {
      name: "Willy",
      cartes: 1
    },
    {
      name: "Yann",
      cartes: 3
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
