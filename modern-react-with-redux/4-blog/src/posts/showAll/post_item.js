import React from 'react';
import {Link} from 'react-router';

const PostItem = ({post}) => {
    return (
        <li className="list-group-item justify-content-between">
            <Link to={'posts/' + post.id}>
                <strong>{post.title}</strong>
            </Link>
            <span>{post.categories}</span>
        </li>
    )
};

export default PostItem;