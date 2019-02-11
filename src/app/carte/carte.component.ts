import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  @Input() number: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
