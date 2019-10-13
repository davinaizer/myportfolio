import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const logger = createLogger({
    collapsed: true,
    diff: true,
});

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
