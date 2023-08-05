import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPost } from "../redux/actions/postActionCreator"
import { useNavigate, NavLink } from 'react-router-dom'
import arrow from "./icons/rightArrow.png"

const PostContainer = ({ post_arr }) => {
    let dispatch = useDispatch();
    let navigate = useNavigate()


    const capitalized_firstLetter = (str) => {
        let arr = str.split(" ");
        let ans = ""
        for (let word of arr) { ans += word.charAt(0).toUpperCase() + word.substring(1) + " ";}
        return ans
    }
    return (
        <div className='post-cont'>
            {
                post_arr.length > 0 ?
                    (post_arr.map((obj, i) => {
                        return (
                            <div className='post' onClick={() => {
                                dispatch(setSelectedPost(obj))
                                navigate(`/item/:${obj.id}`)
                            }} key={i}>
                                <img src={`https://picsum.photos/200?random=${obj.id}`} alt={`user-image-${obj.id}`} />
                                <strong>{capitalized_firstLetter(obj.title.trim().slice(0, 42))}…</strong>
                                <div className='post-down'>
                                    <div>{capitalized_firstLetter(obj.body.trim().slice(0, 50))} <NavLink to={`/item/:${obj.id}`}>Read More…</NavLink></div>
                                    <div>
                                        <img src={arrow} alt="right-arrow" />
                                    </div>
                                </div>

                            </div>
                        )
                    })) : (<div className='parent'><div className='loader'></div> </div>)
            }
        </div>
    )
}

export default PostContainer