import React from 'react'
import Header from '../companents/header'
import Posts from '../companents/posts.jsx'
import Sidebar from '../companents/sidebar.jsx'

export default function Home() {
  return (
    <div className="">
        <Header/>
        <div className="home">
        <Posts/> 
        <Sidebar/>
        </div>
    </div>
  )
}
