import { FILTER_BY_ID } from './types';

const filterById = payload => ({
    type: FILTER_BY_ID,
    payload,
});

const filterByIdAction = id => (dispatch, getState) => {
    const workItem = getState().config.workList[id];
    dispatch(filterById([workItem]));
};

export default filterByIdAction;
