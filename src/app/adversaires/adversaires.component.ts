import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adversaires',
  templateUrl: './adversaires.component.html',
  styleUrls: ['./adversaires.component.css']
})
export class AdversairesComponent implements OnInit {

  @Input() name:string;
  @Input() cartes:number;

  constructor() { }

  ngOnInit() {
  }

}
