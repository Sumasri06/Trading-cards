import { Action } from "@ngrx/store";
import { Player } from "../shared/model/player.model";

export const CREATE = '[Players] Create';
export const UPDATE = '[Players] Create';
export const DELETE = '[Players] Create';

export class Create implements Action {
    readonly type = CREATE;
    public player: Player;
    constructor(public _player: Player) {
        this.player = _player;
    }
}
