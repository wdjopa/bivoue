import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueurComponent } from './joueur/joueur.component';
import { CarteComponent } from './carte/carte.component';
import { PiocheComponent } from './pioche/pioche.component';
import { TableComponent } from './table/table.component';
import { AdversairesComponent } from './adversaires/adversaires.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { PlateauComponent } from './plateau/plateau.component';
import { FormsModule } from '@angular/forms';
import { PlateauService } from './services/plateau.service';
import { CarteService } from './services/cartes.service';
import { HomeComponent } from './Home/home/home.component';
import { SoloComponent } from './Home/solo/solo.component';
import { CardGameComponent } from './card-game/card-game.component';
import { JeuDeCarteService } from './services/jeu-de-carte.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/solo', component: SoloComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    JoueurComponent,
    CarteComponent,
    PiocheComponent,
    TableComponent,
    AdversairesComponent,
    HeaderComponent,
    ChatComponent,
    PlateauComponent,
    HomeComponent,
    SoloComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PlateauService,
    CarteService,
    JeuDeCarteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
