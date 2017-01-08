import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class View extends React.Component {

}


class ShowPosts extends View {

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item justify-content-between" key={post.id}>
                    <Link to={'posts/' + post.id}>
                        <strong>{post.title}</strong>
                    </Link>
                    <span>{post.categories}</span>
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