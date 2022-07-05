import * as ActionTypes  from "../ActionTypes"
const initialstate={
    isloading:false,
    medicines:[],
    error:''
}

export const medicineReducer=(state=initialstate,action)=>{
    console.log(action.type, action.payload);
    switch(action.type){
        case ActionTypes.GET_MEDISION:
        return{
            ...state,
            isloading:false,
            medicines:action.payload,
            error:''
        }
        default:
            return state;
    }
}