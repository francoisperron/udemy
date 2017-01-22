import {FETCH_POST} from '../../posts_repo';
import {UNSELECTED_POST} from './unselected/unselected_post_action';
import {DELETED_POST} from './delete/delete_post_action';
import {deletePost} from './delete/delete_post';

export function fetchPost(selectedPost = null, action) {
    if (action.type == FETCH_POST) return action.payload.data;

    if (action.type == UNSELECTED_POST) return null;

    if (action.type == DELETED_POST) {
        deletePost(action.id);
        return null;
    }

    return selectedPost;
}