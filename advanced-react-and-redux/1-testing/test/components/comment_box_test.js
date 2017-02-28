import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment box', () => {
    let commentBox;

    beforeEach(() => {
        commentBox = renderComponent(CommentBox);
    });

    it('has a text input', () => {
        expect(commentBox.find('button')).to.exist;
    });

    it('has a text area', () => {
        expect(commentBox.find('textarea')).to.exist;
    });

    it('has the comment box class', () => {
        expect(commentBox).to.have.class('comment-box');
    });


    describe('entering text', () => {

        beforeEach('', () =>{
            commentBox.find('textarea').simulate('change', 'new comment');
        });

        it('shows entered text', () => {
            expect(commentBox.find('textarea')).to.have.value('new comment');

        });
        it('when submitted, the text is cleared', () => {
            commentBox.find('button').simulate('click');

            expect(commentBox.find('textarea')).to.have.value('');
        });
    });

});

