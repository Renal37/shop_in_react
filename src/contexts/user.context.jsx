import { createContext, useEffect,useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
export const UserContext = createContext({
    currenUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPE ={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReducer = (state,action)=>{
    console.log('dispatch');
    console.log(action);
    const {type,payload}=action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
        return{
            ... state,
            currenUser:payload
        }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}
// ?
const INITIAL_STATE={
    currenUser:null
}
export const UserProvider = ({ children }) => {
    const[{currenUser}, dispatch ]=useReducer(userReducer,INITIAL_STATE);
    console.log(currenUser);

    const setCurrentUser = (user)=>{
        dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user));
    }


    const value = { currenUser, setCurrentUser };



    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}