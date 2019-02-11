import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PlateauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
