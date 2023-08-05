import React, { useState } from 'react'
import home from './icons/home.png'
import bell from "./icons/bell.png"
import save from './icons/save.png'
import user from './icons/user.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa'
const NavBar = () => {
    const [click, setIsClick] = useState(false)
    return (
        <div className='navbar'>
            <h3>TravelMedia.in</h3>
            <div className={click ? "icons icons2 icons3" : "icons icons2"}>
                <img src={home} alt="home" id='firstImg' />
                <img src={bell} alt="bell" />
                <img src={save} alt="save" />
                <img src={user} alt="user" />

            </div>
            <div className='right'></div>
            {

            }
            <div className='menu'>
                {click ? (<div onClick={() => setIsClick(!click)}><FaTimes /> </div>) : (<div onClick={() => setIsClick(!click)}><AiOutlineMenu /> </div>)}
            </div>

        </div>
    )
}

export default NavBar