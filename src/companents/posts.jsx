import React from 'react'
import { excerpt } from "../utility";
import { Link } from "react-router-dom";

export default function Postsosts({postList}) {

  return (
        <div className='posts flex flex-wrap justify-center'>
        <div className="post w-80 max-w-xs">
            <img className='rounded-lg w-full h-56 object-cover' src="https://img5.goodfon.com/wallpaper/nbig/8/5e/devushka-briunetka-wlop-by-wlop-volosy-krupnym-planom.jpg" alt="" />
            <p className='text-sm text-center text-yellow-600 mt-2'>Music Life</p>
            <h3 className='font-semibold text-xl text-center text-gray-800'>Lorem ipsum dolor sit..</h3>
            <p className='text-xs font-light text-center italic mt-2 mb-2 text-gray-500'>1 hour ago</p>
            <p className='fontPost'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit debitis obcaecati nostrum illum sint invent ...</p>
            <button className="px-3 py-2 ml-1 bg-gray-700 rounded-sm mt-3 text-white">Read More</button>
        </div>
        {
            postList.map((post)=>{
                return (
                    <div className="post w-80 max-w-xs">
                        <img className='rounded-lg w-full h-56 object-cover' src={post.imageUrl} alt="" />
                        <p className='text-sm text-center text-yellow-600 mt-2'>{post.category}</p>
                        <h3 className='font-semibold text-xl text-center text-gray-800'>{post.title}</h3>
                        <p className='text-xs font-light italic text-center mt-2 mb-1 text-gray-500'>{post.author.timestamp.toDate().toDateString()}</p>
                        <p className='fontPost'>
                        {excerpt(post.postText, 120)}</p>
                        <Link to={`/post/${post.id}` }>
                            <button className="px-3 py-2 ml-2 bg-gray-700 rounded-sm mt-3 text-white">Read More</button>
                        </Link>
                    </div>
                )
            })
        }
     
    </div>
  )
}
