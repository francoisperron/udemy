import {FETCH_POST} from '../../posts_repo';

export function post(state = null, action) {
    if (action.type != FETCH_POST) return state;

    return action.payload.data;
}