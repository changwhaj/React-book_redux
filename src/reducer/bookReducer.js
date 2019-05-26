const actionType = {
    SET_BOOKLIST_PROP : 'books.setProp',
    SET_SELECTEDBOOK_PROP : 'selectedBook.setProp',
    SEARCH_BY_TITLE : 'books.searchByTitle'
}

const initialState = {
    books : [],
    selectedBook : [],
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionType.SET_BOOKLIST_PROP :
            return {
                ...state,
                books : payload,
                selectedBook : payload[0],
            }
        case actionType.SET_SELECTEDBOOK_PROP :
            return {
                ...state,
                selectedBook : payload,
            }
        case actionType.SEARCH_BY_TITLE :
            return {
                ...state,
                books : payload,
                selectedBook : payload[0],
            }
        default :
            return state;
    }
}

export default reducer;
export { actionType };