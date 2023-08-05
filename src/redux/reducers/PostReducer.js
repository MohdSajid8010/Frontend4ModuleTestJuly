import { FETCH_POST_REQ, FETCH_POST_SUCC, FETCH_POST_FAIL } from "../actions/postActionType";


let initial_state = { loading: false, data: [], err: "" };
const PostReducer = (state = initial_state, actions) => {
    switch (actions.type) {
        case FETCH_POST_REQ: return { ...state, loading: true, err: "" };
        case FETCH_POST_SUCC: return { ...state, loading: false, data: actions.payload, err: "" };
        case FETCH_POST_FAIL: return { ...state, loading: false, data: [], err: actions.payload };
        default: return state;
    }
}

export default PostReducer

