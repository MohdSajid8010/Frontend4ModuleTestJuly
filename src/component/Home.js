import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetPostDataFromAPI } from "../redux/actions/postActionCreator"
import { setSelectedPost } from "../redux/actions/postActionCreator"
import { useNavigate, NavLink } from 'react-router-dom'
import PostContainer from './PostContainer'
import { FaSearch } from "react-icons/fa";

const Home = () => {
    // let state = useSelector((store) => console.log("line 5", store));
    let loading = useSelector((store) => store.postDataObj.loading)
    let err = useSelector((store) => store.postDataObj.err)


    let post_arr = useSelector((store) => store.postDataObj.data);
    console.log(post_arr)

    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(fetPostDataFromAPI())
    }, [])
    return (
        <div>
            <div className='input-cont'>
                <h1>Social Media For Travellers</h1>
                <div className='serch-icon-cont'>
                    <input type='text' placeholder='Search here...' />
                    <div className='search-icon'><FaSearch /></div>
                </div>
            </div>
            {
                post_arr.length > 0 && (
                    <div>
                        <PostContainer post_arr={post_arr} />
                    </div>
                )
            }
            {
                loading && (<div className='parent'><div className='loader'></div> </div>)
            }

            {
                err && (<h3 style={{ color: "red", textAlign: "center" }}>{err}</h3>)
            }
        </div>
    )
}

export default Home