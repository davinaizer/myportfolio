import { FILTER_BY_ID } from '../actions/types';

const initialState = {
    works: [],
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_ID:
            return {
                ...state,
                works: action.payload,
            };

        default:
            return state;
    }
};

export default filterReducer;
