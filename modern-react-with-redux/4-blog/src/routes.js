import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import Posts from './posts/showAll/show_posts';
import NewPost from './posts/new/new_post';
import ShowPost from './posts/showOne/show_post';

import {onPageShow} from "./posts/showAll/on_page_show";
import {onPostPageShow} from "./posts/new/on_page_show";

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Posts} onEnter={onPageShow}/>
        <Route path="posts/new" component={NewPost}/>
        <Route path="posts/:id" component={ShowPost} onEnter={onPostPageShow}/>
    </Route>
);



