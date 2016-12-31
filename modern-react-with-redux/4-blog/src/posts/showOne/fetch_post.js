import {FETCH_POST} from '../../posts_repo';
import {CLEAR_POST} from './clear_selected_post';

export function fetchPost(selectedPost = null, action) {
    if (action.type == FETCH_POST) return action.payload.data;
    if (action.type == CLEAR_POST) return null;

    return selectedPost;
}