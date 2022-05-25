
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { cameraReducer } from "./cameraReducer";

const rootReducer = combineReducers({
    //state store
    auth: authReducer,
    camera: cameraReducer,
});

export default rootReducer;