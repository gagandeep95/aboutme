import {combineReducers} from "redux";
import LoginReducer from "./login/LoginReducer";


const RootReducer = combineReducers({
    login : LoginReducer
})

export default RootReducer;