import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';

import BookListItem from '../view/BookListItem';
import bookAction from '../action/bookAction';

class BookListContainer extends Component {
    componentDidMount() {
        this.onSetBookList();
    }

    onSetBookList() {
        this.props.bookAction.setBookListProp();
    }

    onBookSelect(book) {
        this.props.bookAction.setSelectedBookProp(book);
    }

    render() {
        const bookListItem = this.props.books.map(book => {
            return (
                <BookListItem onBookSelect={this.onBookSelect.bind(this)}
                              book={book}
                              key={book.ISBN} />
            )
        })

        return (
            <Item.Group divided link>
                {bookListItem}
            </Item.Group>
        )
    }
}

const mapStateToProps = ({ bookState }) => ({
    books : bookState.books,
})

const mapDispatchToProps = (dispatch) => ({
    bookAction : bindActionCreators(bookAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);