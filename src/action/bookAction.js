import Books from '../Books';
import { actionType } from '../reducer/bookReducer';

function setBookListProp() {
    let payload = Books;

    return (dispatch) => dispatch({
        type : actionType.SET_BOOKLIST_PROP, 
        payload,
    })
}

function setSelectedBookProp(book) {
    let payload = book;

    return (dispatch) => dispatch({
        type : actionType.SET_SELECTEDBOOK_PROP,
        payload,
    })
}

function searchByTitle(title) {
    let updateList = Books;
    updateList = updateList.filter(book => {
        return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    })

    return (dispatch) => dispatch({
        type : actionType.SEARCH_BY_TITLE,
        payload : updateList,
    })
}

export default {
    setBookListProp,
    setSelectedBookProp,
    searchByTitle,
}

export {
    setBookListProp,
    setSelectedBookProp,
    searchByTitle,
}