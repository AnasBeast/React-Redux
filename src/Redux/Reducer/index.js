import { counterReducer } from "./Counter";
import  {stringReducer} from "./stringReducer"
import { combineReducers } from "redux";

export const rootReducer = combineReducers({counterReducer,stringReducer});