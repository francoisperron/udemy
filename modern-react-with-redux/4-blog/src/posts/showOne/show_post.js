import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {deletePost} from '../../posts_repo';
import {clearSelectedPost} from "./clear_selected_post";
import PostPage from "./post_page";

class ShowPost extends React.Component {

    render() {
        const {post} = this.props;
        if (!post) {
            return <div></div>
        }

        const onDeleteClick = () => {
            this.props.deletePost(this.props.params.id).then(() => {
                browserHistory.push('/');
            });
        };

        return <PostPage post={post} onReturn={this.props.clearSelectedPost} onDelete={onDeleteClick} />
    }
}

function mapStateToProps(state) {
    return {post: state.selectedPost};

}
export default connect(mapStateToProps, {deletePost, clearSelectedPost})(ShowPost);