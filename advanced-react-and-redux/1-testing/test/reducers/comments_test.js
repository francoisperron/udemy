import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types'

describe('Comments reducer', () => {
    it('does not handle other actions', () => {
        const state = [];
        const nextState = commentReducer(state, {type: 'OTHER_ACTION'});

        expect(nextState).to.equal(state);
    });
    it('handles save action', () => {
        const state = [];
        const nextState = commentReducer(state, {type: SAVE_COMMENT, comment: 'hello'});

        expect(nextState).to.deep.equal(['hello']);
    });

    it('adds comment to current comments', () => {
        const state = ['hey you'];
        const nextState = commentReducer(state, {type: SAVE_COMMENT, comment: 'hello'});

        expect(nextState).to.deep.equal(['hey you', 'hello']);
    });
});