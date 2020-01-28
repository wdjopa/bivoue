import { Carte } from '../models/Carte.model'
import { Subject } from 'rxjs'
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarteService implements OnInit{

    carteSubject = new Subject<Carte[]>();
    private cartes:Carte[];

    constructor(){
        this.cartes = [];
    }
    ngOnInit(){
    }

    /**
     * Initialise le tableau cartes
     */
    initialiseCards(){
        // S
        this.cartes.push(new Carte('A','s'));        
        this.cartes.push(new Carte('2','s'));        
        this.cartes.push(new Carte('3','s'));        
        this.cartes.push(new Carte('4','s'));        
        this.cartes.push(new Carte('5','s'));        
        this.cartes.push(new Carte('6','s'));        
        this.cartes.push(new Carte('7','s'));        
        this.cartes.push(new Carte('8','s'));        
        this.cartes.push(new Carte('9','s'));        
        this.cartes.push(new Carte('10','s'));        
        this.cartes.push(new Carte('J','s'));        
        this.cartes.push(new Carte('Q','s'));        
        this.cartes.push(new Carte('K','s'));        
        // D
        this.cartes.push(new Carte('A','dd'));        
        this.cartes.push(new Carte('2','d'));        
        this.cartes.push(new Carte('3','d'));        
        this.cartes.push(new Carte('4','d'));        
        this.cartes.push(new Carte('5','d'));        
        this.cartes.push(new Carte('6','d'));        
        this.cartes.push(new Carte('7','d'));        
        this.cartes.push(new Carte('8','d'));        
        this.cartes.push(new Carte('9','d'));        
        this.cartes.push(new Carte('10','d'));        
        this.cartes.push(new Carte('J','d'));        
        this.cartes.push(new Carte('Q','d'));        
        this.cartes.push(new Carte('K','d'));        
        // H
        this.cartes.push(new Carte('A','h'));        
        this.cartes.push(new Carte('2','h'));        
        this.cartes.push(new Carte('3','h'));        
        this.cartes.push(new Carte('4','h'));        
        this.cartes.push(new Carte('5','h'));        
        this.cartes.push(new Carte('6','h'));        
        this.cartes.push(new Carte('7','h'));        
        this.cartes.push(new Carte('8','h'));        
        this.cartes.push(new Carte('9','h'));        
        this.cartes.push(new Carte('10','h'));        
        this.cartes.push(new Carte('J','h'));        
        this.cartes.push(new Carte('Q','h'));        
        this.cartes.push(new Carte('K','h')); 
        // H
        this.cartes.push(new Carte('A','c'));        
        this.cartes.push(new Carte('2','c'));        
        this.cartes.push(new Carte('3','c'));        
        this.cartes.push(new Carte('4','c'));        
        this.cartes.push(new Carte('5','c'));        
        this.cartes.push(new Carte('6','c'));        
        this.cartes.push(new Carte('7','c'));        
        this.cartes.push(new Carte('8','c'));        
        this.cartes.push(new Carte('9','c'));        
        this.cartes.push(new Carte('10','c'));        
        this.cartes.push(new Carte('J','c'));        
        this.cartes.push(new Carte('Q','c'));        
        this.cartes.push(new Carte('K','c')); 
        
        return this.cartes;
    }
    
}