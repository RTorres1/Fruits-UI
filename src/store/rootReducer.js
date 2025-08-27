import { combineReducers } from "redux";
import fruitsReducer from "./fruits/fruitsReducer";

const rootReducer = combineReducers({
    fruitsReducer,
});

export default rootReducer;