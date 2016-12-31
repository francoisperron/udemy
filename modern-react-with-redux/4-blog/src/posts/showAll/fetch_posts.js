import {FETCH_POSTS} from '../../posts_repo';

export function fetchPosts(posts = [], action) {
    if (action.type == FETCH_POSTS) return action.payload.data;

    return posts;
}