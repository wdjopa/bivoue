import { Carte } from '../models/Carte.model'
import { Subject } from 'rxjs'
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarteService } from './cartes.service';
import { ArrayType } from '@angular/compiler';


@Injectable()
export class PlateauService {

    carteSubject = new Subject<Carte[]>();
    carteSimpleSubject = new Subject<Carte>();
    private cartes:Carte[];
    private myCartes : Carte [];
    private carteCentre : Carte;
    
    constructor(private carteService : CarteService){
        this.myCartes = [];
        this.cartes = this.carteService.initialiseCards();
    }

    /**
     * generate a random integer between min and max
     * @param {number} min 
     * @param {number} max
     * @return {number} random generated integer 
     */
    randomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateNCards(n){
        while(n>0){
            if(this.cartes.length > 0){
                let i = this.randomInt(0,this.cartes.length);
                this.myCartes.push(this.cartes[i]);
                console.log(this.cartes[i]); 
                this.cartes.splice(i,1);
                n--;   
            }
            else{
                return false;
            }
        }
        this.emitCardsSubject()
    }

    removeCardHand(carte:Carte){
        let i;
        for(i=0;i<this.myCartes.length;i++){
            let c = this.myCartes[i];
            if(c.motif == carte.motif && c.number == carte.number){
                break;
            }
        }
        this.myCartes.splice(i,1);
        this.emitCardsSubject()
    }

    getRandomCard(){
        let i;
        do{
            i = this.randomInt(0,this.cartes.length);
            this.carteCentre = this.cartes[i];
        }while(this.carteCentre.number == "J" || this.carteCentre.number == "7" || this.carteCentre.number == "A");
        this.cartes.splice(i,1);
        this.emitCardSimpleSubject()
    }

    setCardCentre(carte: Carte){
        this.carteCentre = carte;
        this.emitCardSimpleSubject()
    }

    getCenterCard(){
        return this.carteCentre;
    }

    setPreviousCardCentreBack(){
        this.cartes.push(this.carteCentre);
    }
    setCardBack(carte : Carte){
        this.cartes.push(this.carteCentre);
    }

    /**
     * Emit  cards that can be used
     */
    emitCardsSubject() {
        this.carteSubject.next(this.myCartes.slice());
    }
    /**
     * Emit card that can be used
     */
    emitCardSimpleSubject() {
        this.carteSimpleSubject.next(this.carteCentre);
    }
    
}