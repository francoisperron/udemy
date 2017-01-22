import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {fetchPost} from '../posts/showOne/post_controller';
import {fetchPosts} from '../posts/showAll/fetch_posts';

const reducers = combineReducers({
    posts: fetchPosts,
    selectedPost: fetchPost,
    form
});

export default reducers;
