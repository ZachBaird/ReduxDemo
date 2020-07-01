export const increment = initValue => dispatch => {
    dispatch({
        type: 'ADD_ONE',
        payload: initValue + 1
    })
};

export const decrement = initValue => dispatch => {
    dispatch({
        type: 'TAKE_ONE',
        payload: initValue - 1
    })
};