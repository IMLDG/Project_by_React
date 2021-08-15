import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../_reducers';

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(),
);