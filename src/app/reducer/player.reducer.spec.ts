import * as fromReducer from './player.reducer';
import * as actions from '../actions/player.actions';

describe('PlayerCardComponent', () => {

    it('should create', () => {
        const { initialState } = fromReducer;
        const action = {} as actions.Create;
        const state = fromReducer.playerReducer(initialState, action);
        expect(state).toBe(initialState);
    });
});
