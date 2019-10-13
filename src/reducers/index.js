import { combineReducers } from 'redux';
import configReducer from './configReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    config: configReducer,
    filter: filterReducer,
});
