import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PostReducer from './reducers/PostReducer';
import SelectpostRed from "./reducers/SelectpostRed";

let rootReducers = combineReducers({
    postDataObj: PostReducer,
    SelectpostObj:SelectpostRed,
})
let store = createStore(rootReducers, applyMiddleware(thunk));
export default store;


