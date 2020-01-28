import { JeuDeCarte } from '../models/JeuDeCarte.model'
import { Subject } from 'rxjs'
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class JeuDeCarteService implements OnInit{

    carteSoloSubject = new Subject<JeuDeCarte[]>();
    public cartesSolo:JeuDeCarte[];

    carteMultiSubject = new Subject<JeuDeCarte[]>();
    public cartesMulti:JeuDeCarte[];

    constructor(){
        this.cartesSolo = [];
        this.cartesMulti = [];
        this.listSoloGameCards();
        this.listMultiGameCards();
    }
    ngOnInit(){
    }
    
    
    listSoloGameCards(){
        // Solo
        this.cartesSolo.push(new JeuDeCarte('Solitaire',54,25,4,"assets/Cartes/autres/bg.jpg","",""));        
    }
    
    listMultiGameCards(){
        // Multiplayer
        this.cartesMulti.push(new JeuDeCarte('Check & Games',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Le Mensonge',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Le Marché',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Agaram',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Tiya',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Fap fap',54,25,4,"","",""));        
        this.cartesMulti.push(new JeuDeCarte('Le 8 américain',54,25,4,"","",""));        
    }
    /*
1. Check & Games
2. Le Mensonge
3. Le Marché
4. Agaram 
5. Tiya 
6- Fap fap 
7- le 8 américain
8- le toc toc
9- Les simples cartes
10- Cochon gratté
11- black Jack
12- poker classique
13- Le korat
14- Cochon dosé
    */
}
