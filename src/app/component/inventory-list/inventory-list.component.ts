import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Player } from '../../shared/model/player.model';

import * as fromPlayer from "../../reducer/player.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'inventory-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  players$: Observable<any>;
  constructor(private store: Store<fromPlayer.State>) { }

  ngOnInit(): void {
    this.players$ = this.store.pipe(select(fromPlayer.selectAll));
  }
}
