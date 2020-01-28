import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/Carte.model';
import { PlateauService } from '../services/plateau.service';
import { Subscription } from 'rxjs';

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

  private cardCentre : Carte;
  cardCentreSubscription : Subscription;

  constructor(private plateauService : PlateauService) { }

  ngOnInit() {
    this.plateauService.getRandomCard();
    this.cardCentreSubscription = this.plateauService.carteSimpleSubject.subscribe(
      (carte:Carte) => {
        this.cardCentre = carte;
      }
    )
    this.plateauService.emitCardSimpleSubject();
  }

  goLeft () {
    document.querySelector("app-joueur").scrollLeft -= 30; 
  }
  goRight () {
    document.querySelector("app-joueur").scrollLeft += 30;     
  }

}
