export const toggleHello = currentVis => dispatch => {
    dispatch({
        type: 'TOGGLE_VISIBILITY',
        payload: !currentVis
    })
}

export const typedOutMoreThan5 = (currentVis, word) => dispatch => {
    let test = false;

    if (word === 'hello') {
        test = true;
    }

    if (test) {
        dispatch({
            type: 'TOGGLE_VISIBILITY',
            payload: !currentVis
        })
    }
}