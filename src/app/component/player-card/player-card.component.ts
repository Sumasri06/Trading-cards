import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/model/player.model';

@Component({
  selector: 'inventory-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() player : Player;
}
