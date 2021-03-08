import { combineReducers } from "redux";
import counterReducer from "./counter";

const reducers = combineReducers({ counterReducer });

export default reducers;
