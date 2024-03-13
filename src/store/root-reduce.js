import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import {categoriesReducer} from './categories/catgory.reducer'

export const rootRecuder = combineReducers({
 user: userReducer,
 categories: categoriesReducer,

});