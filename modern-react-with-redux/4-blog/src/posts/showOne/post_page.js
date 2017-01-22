import React from 'react';
import {Link} from 'react-router';

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

export default PostPage;