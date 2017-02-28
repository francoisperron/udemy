import React, {Component} from 'react';
import CommentBox from './comment_box';
import Comments from './comments';

export default class App extends Component {
    render() {
        return (
            <div>
                <CommentBox/>
                <Comments/>
            </div>
        );
    }
}
