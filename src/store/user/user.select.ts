import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { state } from "../cart/cart.reducer";

export const selectctUserReducer = (state:state):UserState => state.user.currentUser;

export const selectCurrentUser = createSelector(
    selectctUserReducer,
    (user)=>user.currentUser
)