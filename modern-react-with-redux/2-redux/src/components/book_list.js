import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import BookItem from './book_item';

class BookList extends React.Component {

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.props.books.map((book) => {
                    return <BookItem key={book.title} book={book} onBookSelect={this.props.selectBook}/>
                })}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)