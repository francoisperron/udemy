import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {fetchPost} from '../posts/showOne/fetch_post';
import {fetchPosts} from '../posts/showAll/fetch_posts';

const reducers = combineReducers({
    posts: fetchPosts,
    selectedPost: fetchPost,
    form
});

export default reducers;
