
const initialState = {
    sum: 0,
    history: []
}

const blue = (state = initialState, action) => {
    const newState = {...state};

    console.log(action);

    if(action.type === 'ADD') {
        return {
            ...state,
            sum: action.newSum,
            history: state.history.concat({sum: action.newSum})
        }
    }
    if(action.type === 'SUBTRACT') {
        return {
            ...state,
            sum: action.newSum,
            history: state.history.concat({sum: action.newSum})
        }
    }

    return newState;
}

export default blue;