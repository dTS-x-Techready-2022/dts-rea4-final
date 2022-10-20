import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { techNewsReducer } from "./reducer";

const store = createStore(techNewsReducer, applyMiddleware(thunk));

export default store;
