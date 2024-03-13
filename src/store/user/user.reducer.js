import { USER_ACTION_TYPE } from "./user.types";


// ?
const INITIAL_STATE={
    currenUser:null
}
export const userReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload}=action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
        return{
            ... state,
            currenUser:payload
        }
        default:
        return state;
    }
};