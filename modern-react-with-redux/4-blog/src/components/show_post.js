import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';

class ShowPost extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props){
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(() => { this.context.router.push('/')});
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return <div>En recherche du blog...</div>
        }
        return (
            <div>
                <Link to="/">Retour...</Link>
                <button
                    className="btn btn-outline-danger float-right"
                    onClick={this.onDeleteClick}>
                    Effacer
                </button>
                <h3>{post.title}</h3>
                <h6>Catégories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {post: state.posts.post};

}
export default connect(mapStateToProps, {fetchPost, deletePost})(ShowPost);