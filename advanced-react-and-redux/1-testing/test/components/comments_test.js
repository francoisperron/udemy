import {renderComponent, expect} from '../test_helper';
import Comments from '../../src/components/comments';

describe('Comments list', () => {
    let comments;

    beforeEach(() => {
        const state = { comments: ['allo', 'bye', 'ciao'] };
        comments = renderComponent(Comments, null, state);
    });

    it('has no comments by default', () => {
        const emptyComments = renderComponent(Comments);

        expect(emptyComments.find('li').length).to.equal(0);

    });

    it('shows all comments', () => {
        expect(comments.find('li').length).to.equal(3);
    });

    it('shows comment text', () => {
        expect(comments).to.contain('allo');
        expect(comments).to.contain('bye');
        expect(comments).to.contain('ciao');
    });
});

