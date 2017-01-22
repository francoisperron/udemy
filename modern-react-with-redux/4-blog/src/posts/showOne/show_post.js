import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {deletePost} from '../../posts_repo';
import {clearSelectedPost} from "./clear_selected_post";

class ShowPost extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id).then(() => {
            browserHistory.push('/');
        });
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return <div></div>
        }
        return (
            <PostPage post={post} onReturn={this.props.clearSelectedPost} onDelete={this.onDeleteClick} />
        )
    }
}

const PostPage = ({post, onReturn, onDelete}) => {
    return (
        <div>
            <Link to="/" onClick={onReturn} className="btn btn-outline-secondary">Retour</Link>
            <button
                className="btn btn-outline-danger float-right"
                onClick={onDelete}>
                Effacer
            </button>
            <div className="content">
                <h3>{post.title}</h3>
                <h6>Catégories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        </div>
    )
};


function mapStateToProps(state) {
    return {post: state.selectedPost};

}
export default connect(mapStateToProps, {deletePost, clearSelectedPost})(ShowPost);