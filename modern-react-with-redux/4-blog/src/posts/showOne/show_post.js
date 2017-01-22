import React from 'react';
import {connect} from 'react-redux';
import {unselectedPost} from "./unselected/unselected_post_action";
import {deletedPost} from "./delete/delete_post_action";
import PostPage from "./post_page";

class ShowPost extends React.Component {

    render() {
        const {post, deletedPost, unselectedPost} = this.props;

        if (!post) {
            return <div></div>
        }

        const onDeleteClick = () => {
            return deletedPost(post.id);
        };

        return <PostPage post={post} onReturn={unselectedPost} onDelete={onDeleteClick} />
    }
}

function mapStateToProps(state) {
    return {post: state.selectedPost};

}
export default connect(mapStateToProps, {deletedPost, unselectedPost})(ShowPost);