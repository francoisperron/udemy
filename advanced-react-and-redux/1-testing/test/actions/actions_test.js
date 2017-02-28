import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types'
import {saveComment} from '../../src/actions/index'

describe('Actions', () => {
    describe('save comment', () => {
        let action;
        beforeEach('the save action', () =>{
            action = saveComment('hello there');
        });

        it('emits save action', () => {
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('with the inserted comment', () => {
            expect(action.comment).to.equal('hello there');
        });
    });
});

