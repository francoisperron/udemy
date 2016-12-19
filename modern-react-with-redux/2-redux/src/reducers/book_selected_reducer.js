export default function (state = null, action) {
    if(action.type == 'BOOK_SELECTED')
        return action.book;

    return state;
}
