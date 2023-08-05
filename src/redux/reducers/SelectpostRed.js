import { SELECTED_POST } from "../actions/postActionType";

let initial_state = null
const SelectpostRed = (state = initial_state, actions) => {
    switch (actions.type) {
        case SELECTED_POST: return { ...state, ...actions.payload };
        default: return state;
    }
}

export default SelectpostRed