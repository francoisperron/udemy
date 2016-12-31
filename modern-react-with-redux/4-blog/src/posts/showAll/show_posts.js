import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class ShowPosts extends React.Component {

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={'posts/' + post.id}>
                        <strong>{post.title}</strong>
                    </Link>
                    <span className="float-right">{post.categories}</span>
                </li>
            )
        });
    }

    render() {
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
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps)(ShowPosts);