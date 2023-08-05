import { FETCH_POST_REQ, FETCH_POST_SUCC, FETCH_POST_FAIL,SELECTED_POST } from "./postActionType"
import axios from "axios"
export const fetchPostRequest = () => {
    return { type: FETCH_POST_REQ };
}

export const fetchPostSuccess = (data) => {
    return { type: FETCH_POST_SUCC, payload: data };
}

export const fetchPostFailure = (errMsg) => {
    return { type: FETCH_POST_FAIL, payload: errMsg };
}

//api call
export const fetPostDataFromAPI = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                if (res.status === 200) {
                    // console.log("200",res)
                    dispatch(fetchPostSuccess(res.data));
                } else { dispatch(fetchPostFailure(`Request failed with status code ${res.status}`)) }
            }).catch((err) => {
                console.log(err)
                dispatch(fetchPostFailure(err.message))
            })
    }
}


export const setSelectedPost=(obj)=>{
    return {type:SELECTED_POST, payload:obj}
}
