import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const enhancer = compose(applyMiddleware(ReduxThunk));

export default createStore(reducers, enhancer);
