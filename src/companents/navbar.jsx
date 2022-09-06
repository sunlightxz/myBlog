import React from 'react'
import "../style.css"
export default function Navbar() {
  const user = true ;
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
              <li className='listTopItem'>HOME</li>
              <li className='listTopItem'>ABOUT</li>
              <li className='listTopItem'>CONTACT</li>
              <li className='listTopItem'>WRITE</li>
             {user ?<li className='listTopItem'>LOGOUT</li> : ""} 
            </ul>
          </div>
          {
            user ?
            <div className="nav-right relative ml-3">
            <div>     
              <button type="button"  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
              id="user-menu-button"  data-dropdown-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
               <span className="sr-only">Open user menu</span>
               <img className="nav-prfl h-8 w-8 rounded-full" src="data:image/jpeg;base64,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" alt="" />
              </button>
            </div>


            <div  id="dropdown" class="hidden absolute right-0 z-10 mt-36 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div> 

            
          </div> :
          <p className='nav-right'>LOGIN</p>
}
          
       </nav>
    </div>
  )
}
