import { SET_WORKS, SET_IS_DATA_LOADED } from './types';

const setWorks = payload => ({
    type: SET_WORKS,
    payload,
});

const setIsDataLoaded = payload => ({
    type: SET_IS_DATA_LOADED,
    payload,
});

const setConfigAction = data => dispatch => {
    dispatch(setWorks(data.works));
    dispatch(setIsDataLoaded(true));
};

export default setConfigAction;
