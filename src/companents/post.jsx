import React from 'react'
import SinglePost from './singlePost.jsx'
import Sidebar from './sidebar.jsx'


export default function Post() {
  return (
    <selection className="flex mt-14">
     <SinglePost/>
     <Sidebar/>
    </selection>
  )
}
