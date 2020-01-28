import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Input() titre: string;
  @Input() back: string;
  
  
  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  retour(){
    if(this.back.toLowerCase() == "retour"){
      this.router.navigate(['..']);
    }
  }

}
