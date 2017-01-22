export const DELETED_POST = 'DELETED_POST';

export function deletedPost(id) {
    return {
        type: DELETED_POST,
        id: id
    };
}
