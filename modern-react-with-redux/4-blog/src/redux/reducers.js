import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {post} from '../posts/showOne/fetch_post';
import {all} from '../posts/showAll/fetch_posts';

const reducers = combineReducers({posts: all, selectedPost: post, form});

export default reducers;
