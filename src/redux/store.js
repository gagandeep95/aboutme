import {createStore, applyMiddleware} from "redux";
import RootReducer from "./RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";


const store = createStore(RootReducer, composeWithDevTools(
    applyMiddleware(logger)
))


export default store;