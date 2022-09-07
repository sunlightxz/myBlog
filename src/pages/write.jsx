import React from 'react'
import Sidebar from '../companents/sidebar.jsx'
import { useState } from 'react'
import { collection, doc, setDoc } from "firebase/firestore"; 
import {db,auth} from '../firebase'
import { useNavigate } from 'react-router-dom';


export default function Write() { 
  const [title ,setTitle]= useState("");
  const [textPost ,setTextPost]= useState("");

  let Navigate = useNavigate();
  const createPost = async ()=> {
    const PostCollectionRef= doc(collection(db, "posts"));
     await setDoc(PostCollectionRef,
        {title :title ,
          textPost :textPost,
          author :{name:auth.currentUser.displayName ,id:auth.currentUser.uid}
        })
           
    // Navigate("/");
  }
  return (
    <div className=" pt-14 w-full">
       <img className=' object-cover rounded-md h-64 w-3/4 mx-auto mt-14' src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80" alt="" /> 
      <form>
        <div className="ml-36 flex items-center">
          <label htmlFor="">
            <i className="w-6 h-6 rounded-full border-solid border-2 flex justify-center items-center text-xl cursor-pointer text-gray-500  fa-solid fa-plus"></i>
          </label>
          <input type="file" className='hidden' />
          <input onChange={(e)=>setTitle(e.target.value)} className='text-2xl p-4 w-8/12 focus:outline-none text-gray-700' type="text" placeholder='Title' name="" id="" />
        </div>
        <div className="ml-36">
          <textarea onChange={(e)=>setTextPost(e.target.value)} className='text-xl p-4 w-8/12 focus:outline-none text-gray-700' placeholder='Tell your story....'></textarea>
          <button onClick={createPost} className='absolute top-22 right-10 text-white bg-green-700 px-3 py-2 rounded-md cursor-pointer' >Publish</button> 
        </div>
      </form>
    </div>
  )
}