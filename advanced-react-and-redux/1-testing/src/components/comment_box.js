import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.commenTextChanged = this.commenTextChanged.bind(this);
        this.submitComment = this.submitComment.bind(this);

        this.state = {comment: ''};
    }

    commenTextChanged(event) {
        this.setState({comment: event.target.value});
    }

    submitComment() {
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div className="comment-box">
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.commenTextChanged}/>
                <div>
                    <button onClick={this.submitComment}>Submit</button>
                </div>
            </div>
        )
    }

}

export default connect(null, actions)(CommentBox);