import * as ActionTypes  from "../ActionTypes";
const intialstate ={
    counter: 0
}

export const counterReducer=(state = intialstate,action)=>{
    switch(action.type){
        case ActionTypes.INCREMENT_COUNDER:
        return{
             ...state,
             counter:state.counter+1
        }
        case ActionTypes.DECREMENT_COUNDER:
        return{
             ...state,
             counter:state.counter-1
        }
        default:
            return state;
    }
}