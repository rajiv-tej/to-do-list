import React, { useState } from 'react'
import './Navbar.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {provider , db , auth} from '../FirebaseConfig'

const signOut = ()=>{
    auth.signOut();
    console.log('signed out successfully')
}


function Navbar() {
    const [user] = useAuthState(auth);
    const [Toggle , setToggle] = useState(false); 
    return (
        // <div>
        //     <nav className="navbar navbar-dark bg-dark ">
        //     <div className="container-fluid">
        //          <a className="navbar-brand container" href="#">TODO</a>
        //          <a className="" href="#">TODO</a>
        //     </div>
                
        //     </nav>

        // </div>

        <>
            <div className="navbarcustom">
                <div className="navcon">
                    <div className="logo">TODO 📋</div>
                    {/* <div className="buttons">
                        {user?<button type="button" onClick={signOut} class=" button_c">Sign out </button>:<div></div>}
                    
                    </div> */}
                    {user?
                    <div className="userpopup">
                        <div  className={Toggle?"hide bulge ":"bulge"}></div>
                        <div onClick={()=>{setToggle(!Toggle)}} className="profileimg">
                            <img src={user?user.photoURL:""}  alt="" />
                        </div>
                        <div  className={Toggle?"hide dropdwn ":"dropdwn"}>
                            {Toggle?<div></div>:<div onClick={()=>{setToggle(!Toggle)}} className="blocker"></div>}
                            <h1 className="user_name">Hey!<br/> <br/><span className="unameinpop"><p>{user?user.displayName:'hello'}</p></span><br/><hr/></h1>
                            <p className="greet2">you're doing great.</p>
                            <div className="sign_out">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 12.771h-3.091c-.542 0-.82-.188-1.055-.513l-1.244-1.674-2.029 2.199 1.008 1.562c.347.548.373.922.373 1.42v4.235h-1.962v-3.981c-.016-1.1-1.695-2.143-2.313-1.253l-1.176 1.659c-.261.372-.706.498-1.139.498h-3.372v-1.906l2.532-.001c.397 0 .741-.14.928-.586l1.126-2.75c.196-.41.46-.782.782-1.102l2.625-2.6-.741-.647c-.223-.195-.521-.277-.812-.227l-2.181.381-.342-1.599 2.992-.571c.561-.107 1.042.075 1.461.462l2.882 2.66c.456.414.924 1.136 1.654 2.215.135.199.323.477.766.477h2.328v1.642zm-2.982-5.042c1.02-.195 1.688-1.182 1.493-2.201-.172-.901-.96-1.528-1.845-1.528-1.186 0-2.07 1.078-1.85 2.234.196 1.021 1.181 1.69 2.202 1.495zm4.982-5.729v15l6 5v-20h-6z"/></svg>
                                </div>
                                <div>
                                    <span className="so" onClick={signOut } >sign out</span>
                                </div>
                                    
                            </div>
                        </div>        
                    </div>
                    :<div></div>}
                </div>
            </div>
            {/* <div className="navbarcustom">
                <div className="navcon">
                <div className="logo">TODO 📋</div>
                <div className="buttons">
                <button type="button" class=" button_c">Sign in with <img className="g_logo" src="/search.svg" /></button>
                </div>
                </div>
            </div> */}
        </>
    )
}

export default Navbar
