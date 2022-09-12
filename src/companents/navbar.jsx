import React , { useState } from "react";
import "../style.css"
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { auth } from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Navbar(props) {
  let Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth)
  
  const Open = ()=> {
    setIsOpen(e => !e)

  } 
  const SignUserOut =()=> {
    signOut(auth).then(()=>{
      localStorage.clear();
      Navigate("/login");
    })
  }
  return (
    <div>
       <nav className="nav fixed w-full z-10 top-0 bg-white">
          <div className="nav-left">
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
          </div>
          <div className="nav-center">
            <ul className='listTOp'>
              <li className='listTopItem'>
                <Link to="/">HOME</Link>
              </li>
              <li className='listTopItem'>
                <Link to="/about">ABOUT</Link>
                </li>
              <li className='listTopItem'>
                <Link to="/contact">CONTACT</Link>
                </li>
              <li className='listTopItem'>
                <Link to="/write">WRITE</Link>
                </li>
             {!user? 
              <li className='listTopItem'><Link to="/login">LOGIN</Link></li>
             : 
              <li className='listTopItem ml-2'> <button onClick={SignUserOut}>LOG OUT</button></li> 
             } 
            </ul>
          </div>
          {
            user?
        <div className="nav-right relative ml-3">
            <div>     
              <button type="button" onClick={Open} className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
              id="user-menu-button"  data-dropdown-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
               <span className="sr-only">Open user menu</span>
               <img className="nav-prfl h-8 w-8 rounded-full" src={auth.currentUser.photoURL} alt="" />
              </button>
            </div>


         { isOpen &&
             <div  id="dropdown" class="absolute right-0 z-10 mt-44 mr-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
             role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
               <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
               <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
         <a class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" href="" ><button onClick={SignUserOut}>LOG OUT</button></a>

             </div> 
         }

            
          </div> :
          <p className='nav-right'></p>
}
          
       </nav>
    </div>
  )
}
