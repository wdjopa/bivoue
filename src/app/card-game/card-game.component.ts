import { Component, OnInit, Input } from '@angular/core';
import { JeuDeCarteService } from '../services/jeu-de-carte.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  @Input() mode: string;
  
  constructor(private cardGameService : JeuDeCarteService) {}

  ngOnInit() {
     
  }
  listCardGame(){
    if(this.mode.toLowerCase() == "solo"){
      return this.cardGameService.cartesSolo;
    }
    else{
      return this.cardGameService.cartesMulti;
    }
  }
}
