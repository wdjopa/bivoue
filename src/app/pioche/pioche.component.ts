import { Component, OnInit } from '@angular/core';
import { PlateauService } from '../services/plateau.service';

@Component({
  selector: 'app-pioche',
  templateUrl: './pioche.component.html',
  styleUrls: ['./pioche.component.css']
})
export class PiocheComponent implements OnInit {

  constructor(private plateauService : PlateauService) { }

  ngOnInit() {
  }

  pioche = (n) => {
    if(this.plateauService.generateNCards(n))
      this.plateauService.emitCardsSubject();
  }

}
