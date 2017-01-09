import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PostItem from './post_item';

const PostsPage = ({posts}) => {
    return (
        <div>
            <div className="text-right">
                <Link to="/posts/new" className="btn btn-outline-primary">
                    Nouveau
                </Link>
            </div>
            <div>
                <h3>Blogs</h3>
                <ul className="list-group">
                    {posts.map((post) => <PostItem key={post.id} post={post}/>)}
                </ul>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps)(PostsPage);