import {actionsType} from "../../constants/actionsType";
import collections from "data/collections.json"

const INITIAL_STATE = {
    collections: collections,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case actionsType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // collections: action.payload
            };
        case actionsType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;