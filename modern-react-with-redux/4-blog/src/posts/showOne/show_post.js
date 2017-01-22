import React from 'react';
import {connect} from 'react-redux';
import {clearSelectedPost} from "./clear_selected_post";
import {deleteSelectedPost} from "./delete_selected_post";
import PostPage from "./post_page";

class ShowPost extends React.Component {

    render() {
        const {post, deleteSelectedPost, clearSelectedPost} = this.props;

        if (!post) {
            return <div></div>
        }

        const onDeleteClick = () => {
            return deleteSelectedPost(post.id);
        };

        return <PostPage post={post} onReturn={clearSelectedPost} onDelete={onDeleteClick} />
    }
}

function mapStateToProps(state) {
    return {post: state.selectedPost};

}
export default connect(mapStateToProps, {deleteSelectedPost, clearSelectedPost})(ShowPost);