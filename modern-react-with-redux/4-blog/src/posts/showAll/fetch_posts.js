import {FETCH_POSTS} from '../../posts_repo';

export function all(state = [], action) {
    if (action.type != FETCH_POSTS) return state;

    return action.payload.data;
}