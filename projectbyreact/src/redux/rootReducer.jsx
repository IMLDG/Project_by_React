import { combineReducers } from "redux";
import SignUpReducer from "./SignUp/reducer";

const rootReducer = combineReducers({
    SignUps : SignUpReducer,
})

export default rootReducer;