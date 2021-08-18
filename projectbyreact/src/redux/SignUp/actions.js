import { SignUp } from "./types"

export const SignUpAction = (name, password) => {
    return {
        type : SignUp,
        payload : String(name, password),
    }
}