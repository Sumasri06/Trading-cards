import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Player } from "../shared/model/player.model";
import * as actions from '../actions/player.actions';
import { createFeatureSelector } from "@ngrx/store";
export const playerAdapter = createEntityAdapter<Player>();
export interface State extends EntityState<Player> {
    
}
const defaultPlayer = {
    // ids: ['1'],
    // entities: {
    //     '1': {
    //         id: '1',
    //         firstName: 'Lionel ', lastName: 'Messi', teamName: 'Barcelona', playerNumber: 2, expectedValue: 1000
    //     }
    // }
}
export const initialState: State = playerAdapter.getInitialState(defaultPlayer);
export function playerReducer(state: State = initialState, action: actions.Create) {
    switch (action.type) {
        case actions.CREATE:
            return playerAdapter.addOne(action.player, state);
        default:
            return state;
    }
}
export const getPlayerState = createFeatureSelector<State>('player');
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = playerAdapter.getSelectors(getPlayerState);