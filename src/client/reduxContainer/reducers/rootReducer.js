import { combineReducers } from "redux";
import loginReducer from "./loginReducer";


const rootReducer = combineReducers({
    currentState: loginReducer
})


export default rootReducer;