import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

const BASE_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=fperron';

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(newPost) {
    const request = axios.post(`${BASE_URL}/posts${API_KEY}`, newPost);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function deletePost(id, success) {
    axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`).then(success);
}