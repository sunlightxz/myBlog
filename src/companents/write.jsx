import React from 'react'
import Sidebar from './sidebar.jsx'

export default function Write() {
  return (
    <div className="flex mt-14">
      {/* <img className='' src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80" alt="" /> */}
      <form>
        <div className="">
          <label htmlFor="">
            <i class="fa-solid fa-plus"></i>
          </label>
          <input type="text" name="" id="" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}
