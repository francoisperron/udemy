import {deletePost as deletePostFromRepo} from '../../../posts_repo';
import {browserHistory} from 'react-router';

export function deletePost(id) {
    deletePostFromRepo(id, redirectToHome);
}

const redirectToHome = () => {
    browserHistory.push('/');
};