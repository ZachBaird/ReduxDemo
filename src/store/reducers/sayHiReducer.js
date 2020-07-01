const TOGGLE_VISIBLITY = 'TOGGLE_VISIBILITY';

const initialState = {
    visible: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_VISIBLITY:
            return {
                ...state,
                visible: action.payload
            }
        default:
            return state;
    }
}