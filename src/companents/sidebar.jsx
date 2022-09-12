import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="slidebar-item">
            <h3 className='p-2 mt-4 mb-4 flex justify-center border-t-2 border-b-2'>ABOUT ME</h3>
            <img className='object-cover mt-2 ' src="https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80" alt="" />
            <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptate at necessitatibus cupiditate, repellendus
               natus eius enim nemo eos ea quia?
            </p>
        </div>

        <div className="slidebar-item">
            <h3 className='p-2 mt-4 mb-4 flex justify-center border-t-2 border-b-2'>CATEGORIES</h3>
            <input className='border py-2 px-3' type="text" placeholder='search' id="" />
           <ul className='mb-2'>
            <li className='inline-block w-1/2 mt-2 cursor-pointer'>Life</li>
            <li className='inline-block	w-1/2 mt-2 cursor-pointer'>Sport</li>
            <li className='inline-block	w-1/2 mt-2 cursor-pointer'>Tech</li>
            <li className='inline-block	w-1/2 mt-2 cursor-pointer'>Music</li>
            <li className='inline-block	w-1/2 mt-2 cursor-pointer'>Style</li>
            <li className='inline-block	w-1/2 mt-2 cursor-pointer'>Cinema</li>
           </ul>
        </div>

        <div className="slidebar-item">
            <h3 className='p-2 mt-4 mb-4 flex justify-center border-t-2 border-b-2 w-full'>Follow Us</h3>
            <div className="flex justify-center items-center mt-3">
                <i class="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-instagram"></i>
                <i class="topIcon fa-brands fa-twitter"></i>
                <i class="topIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
