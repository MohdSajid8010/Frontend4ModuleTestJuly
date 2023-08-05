import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPost } from "../redux/actions/postActionCreator"
import { useNavigate, NavLink } from 'react-router-dom'
import PostContainer from './PostContainer';
import { FaShareAlt, FaRegHeart } from "react-icons/fa";
// FaShareAlt
const Detailpost = () => {
    let SelectpostObj = useSelector((store) => (store.SelectpostObj));
    let post_arr = useSelector((store) => (store.postDataObj.data));
    let [post_arr2, setpost_arr2] = useState([])
    let [userInfo, setuserInfo] = useState(false)

    // let dispatch = useDispatch();
    let navigate = useNavigate()
    useEffect(() => {
        if (SelectpostObj) {
            setpost_arr2(post_arr.filter((obj) => obj.id !== SelectpostObj.id))

        } else {
            navigate("/")
        }
    }, [SelectpostObj])

   const capitalized_firstLetter = (str) => {
        let arr = str.split(" ");
        let ans = ""
        for (let word of arr) {
            ans = ans + word.charAt(0).toUpperCase() + word.substring(1) + " ";
        }
        return ans
    }
    return (
        <div>
            {
                SelectpostObj && (
                    <>
                        <h1>Post Number {SelectpostObj.id}</h1>

                        <div className='detail-cont' onClick={() => {
                        }}>
                            <div className='img-cont'>
                                <img src={`https://picsum.photos/200?random=${SelectpostObj.id}`} alt={`user-image-${SelectpostObj.id}`} />
                                <div className='image-text'>
                                    <strong>{capitalized_firstLetter(SelectpostObj.title.trim().slice(0, 20))}</strong>
                                    <div className='heart-icon'>
                                        <div><FaShareAlt /></div>
                                        <div><FaRegHeart /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='post-down2'>
                                <div className='btn-cont'>
                                    <button onClick={() => setuserInfo(false)} id={userInfo ? "" : "detail"}>Detail</button>
                                    <button onClick={() => setuserInfo(true)} id={userInfo ? "detail" : ""}>User Info</button>
                                </div>

                                {
                                    userInfo ? (<div>Post Was Posted By {SelectpostObj.userId}</div>) : (<>
                                        <strong>{capitalized_firstLetter(SelectpostObj.title.trim())}</strong>
                                        <div>{capitalized_firstLetter(SelectpostObj.body.trim())} </div>
                                    </>)
                                }
                            </div>

                        </div>
                    </>

                )
            }

            {
                <div>
                    <h1>More Post </h1>
                    <PostContainer post_arr={post_arr2} />
                    {/* <div className='post-cont'>
                        {
                            post_arr2.length > 0 ?
                                (post_arr2.map((obj) => {
                                    return (
                                        <div className='post' onClick={() => {
                                            dispatch(setSelectedPost(obj))
                                            navigate(`/item/${obj.id}`)
                                        }}>
                                            <img src={`https://picsum.photos/200?random=${obj.id}`} alt={`user-image-${obj.id}`} />
                                            <div className='post-down'>
                                                <div>userId:{obj.userId}</div>
                                                <div>{obj.title.trim().slice(0, 18)}…</div>
                                                <div>{obj.body.trim().slice(0, 23)} <NavLink>Read More…</NavLink></div>

                                            </div>

                                        </div>
                                    )
                                })) : (<div className='parent'><div className='loader'></div> </div>)
                        }
                    </div> */}
                </div>
            }
        </div>
    )
}

export default Detailpost