
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //state store
    auth: authReducer,
});

export default rootReducer;