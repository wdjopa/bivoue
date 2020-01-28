import { Component, OnInit } from '@angular/core';
import { CarteService } from '../services/cartes.service';
import { Carte } from '../models/carte.model';
import { PlateauService } from '../services/plateau.service';
import { Subscription } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  
  cartesSubscription:Subscription;
  cartes = [];

  constructor(private plateauService : PlateauService) { 
  }
  
  ngOnInit() {
    this.plateauService.generateNCards(4);
    this.cartesSubscription = this.plateauService.carteSubject.subscribe(
      (cartes:Carte[])=>{
        this.cartes = cartes;
    });
    this.plateauService.emitCardsSubject();
  }

  jouer(carte:Carte){
    let centre = this.plateauService.getCenterCard();
    console.log(carte);
    if(centre.motif == carte.motif || centre.number == carte.number || (centre.motif == "dd" && carte.motif == "d" || carte.motif == "dd" && centre.motif == "d")){
      if(carte.number == "J"){
        // Commander
        // Open choice 
        let choiceElement = document.getElementsByClassName("pick")[0] as HTMLElement;
        choiceElement.style.width = "100vw";
        choiceElement.style.height = "100vh";
        this.plateauService.removeCardHand(carte);
        this.plateauService.setPreviousCardCentreBack();
      }
      else if(carte.number == "2"){
        this.plateauService.removeCardHand(carte);
      }
      else if(carte.number == "A"){
        this.plateauService.removeCardHand(carte);
        this.plateauService.setPreviousCardCentreBack();
      }
      else if(carte.number == "7"){
        this.plateauService.removeCardHand(carte);
        this.plateauService.setPreviousCardCentreBack();
      }
      else{
        this.plateauService.removeCardHand(carte);
        this.plateauService.setPreviousCardCentreBack();
      }
      this.plateauService.setCardCentre(carte);      
    }
    else if(carte.number == "2"){
      this.plateauService.removeCardHand(carte);
      this.plateauService.setCardBack(carte); 
    }
    else if(carte.number == "J"){
      // Commander
      // Open choice 
      let choiceElement = document.getElementsByClassName("pick")[0] as HTMLElement;
      choiceElement.style.width = "100vw";
      choiceElement.style.height = "100vh";
      this.plateauService.removeCardHand(carte);
      this.plateauService.setPreviousCardCentreBack();
      this.plateauService.setCardCentre(carte);
    }
  }
  
  command(motif){
    let c = new Carte("0",motif);
    
    let choiceElement = document.getElementsByClassName("pick")[0] as HTMLElement;
    choiceElement.style.width = "0";
    choiceElement.style.height = "0";
    this.plateauService.setCardCentre(c);
    console.log(this.plateauService.getCenterCard());
  }
}
