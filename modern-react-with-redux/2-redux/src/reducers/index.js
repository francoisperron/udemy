import {combineReducers} from 'redux';
import BooksReducer from './books_reducer'
import BookSelectedReducer from './book_selected_reducer'

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: BookSelectedReducer
});

export default rootReducer;
