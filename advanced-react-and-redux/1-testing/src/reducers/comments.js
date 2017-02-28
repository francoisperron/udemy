import {SAVE_COMMENT} from '../actions/types';

export default function (state = [], action) {
    if (action.type != SAVE_COMMENT) return state;

    return [...state, action.comment];
}