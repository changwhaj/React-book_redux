import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookDetail from '../view/BookDetail';
import bookAction from '../action/bookAction';

class BookDetailContainer extends Component {
    componentDidMount() {
        this.props.bookAction.setBookListProp();
    }

    render() {
        const { selectedBook } = this.props;

        return (
            <BookDetail book={selectedBook} />
        )
    }
}

const mapStateToProps = ({ bookState }) => ({
    selectedBook : bookState.selectedBook,
})

const mapDispatchToProps = (dispatch) => ({
    bookAction : bindActionCreators(bookAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);