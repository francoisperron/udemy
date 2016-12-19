import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class ShowPost extends React.Component{

    componentDidMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        return (
            <div>Show post {this.props.posts.post.title}</div>
        )
    }
}

export default connect(null, {fetchPost})(ShowPost);