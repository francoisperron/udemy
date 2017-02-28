import React from 'react';
import {connect} from 'react-redux';

const Comments = ({comments}) => {
    const list = comments.map(c => <li key={c}>{c}</li>);
    return (
        <ul className="comments">{list}</ul>
    )
};

function mapStateToProps(state) {
    return {comments: state.comments}
}

export default connect(mapStateToProps)(Comments)
