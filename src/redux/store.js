import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";

// combining all the reducers 

const rootReducers = combineReducers({userReducer});

export const store = createStore(rootReducers, applyMiddleware(thunk));

console.log(store.getState(), "here is the STORE DATA!!!!!!!!!!!")
