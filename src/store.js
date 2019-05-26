import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bookReducer } from './reducer/index';

const rootReducer = combineReducers({
    bookState : bookReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;
