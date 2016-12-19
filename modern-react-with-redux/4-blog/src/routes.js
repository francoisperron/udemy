import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Posts from './components/posts';
import NewPost from './components/new_post';
import ShowPost from './components/show_post';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="posts/new" component={NewPost}/>
        <Route path="posts/:id" component={ShowPost}/>
    </Route>
);



