import {deletePost2} from '../../posts_repo';
import {browserHistory} from 'react-router';


export const DELETE_SELECTED_POST = 'DELETE_SELECTED_POST';

export function deleteSelectedPost(id) {
    return {
        type: DELETE_SELECTED_POST,
        id: id
    };
}

export function deletePost(id) {
    deletePost2(id, redirectToHome);
}

const redirectToHome = () => {
    browserHistory.push('/');
};