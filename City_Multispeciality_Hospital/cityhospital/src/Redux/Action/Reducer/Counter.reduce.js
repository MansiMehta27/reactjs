import *as actiontypes from '../Reducer/ActionTypes'
const intialstate = {
    counter:0
}
export const counterReducer = (state = intialstate, action) => {
    switch (action.type) {
        case actiontypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actiontypes.DICREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}