const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAIL = "API_CALL_FAIL";

const initialState = {
    fetching: false,
    dog: null,
    error: null,
};

function dogReducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                dog: action.payload,
            };

        case API_CALL_FAIL:
            return {
                ...state,
                fetching: false,
                dog: null,
                error: action.error,
            };
        default:
            return state;
    }
}

export default dogReducer;