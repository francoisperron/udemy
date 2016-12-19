import React from 'react';

const BookItem = ({book, onBookSelect}) => {
    return <li className="list-group-item" onClick={() => onBookSelect(book)}>{book.title}</li>
};

export default BookItem;