const ADD_ONE = 'ADD_ONE';
const TAKE_ONE = 'TAKE_ONE';

const initialState = {
    counterValue: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                counterValue: action.payload
            };
        case TAKE_ONE:
            return {
                ...state,
                counterValue: action.payload
            };
        default:
            return state;
    }
}