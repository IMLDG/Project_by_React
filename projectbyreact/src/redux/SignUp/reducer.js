import { SignUp } from "./types";

const initalState = {
    name : "ㅇㅇ",
    password : "ㅇㅇ",
}

const SignUpReducer = (state = initalState , action) => {
    switch(action.type) {
        case SignUp : 
            return {
                ...state,
                name : state.name+action.payload,
                password : state.password,
            };
        default :
            return state;
    }
}
export default SignUpReducer;