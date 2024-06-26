import { TOGGLE } from "../actions/actionsTypeConstants"

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default loginReducer;