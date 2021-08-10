import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlayer from "../../reducer/player.reducer";
import { Player } from '../../shared/model/player.model';

@Component({
  selector: 'inventory-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  total: number;
  constructor(private store: Store<fromPlayer.State>) { }

  ngOnInit(): void {
    const players = this.store.select(fromPlayer.selectAll);
    players.subscribe((player: Player[]) => {
      this.total = player.reduce((total, current ) => (current.expectedValue ? current.expectedValue : 0) + total, 0)
    })
  }

}
