import { combineReducers, compose, createStore } from "redux";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
   app: appReducer,
 });

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
