import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryFormComponent } from './component/inventory-form/inventory-form.component';
import { PlayerCardComponent } from './component/player-card/player-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from './reducer/player.reducer';
import { InventoryListComponent } from './component/inventory-list/inventory-list.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryFormComponent,
    PlayerCardComponent,
    NavbarComponent,
    InventoryListComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(playerReducer),
    StoreModule.forFeature('player', playerReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
