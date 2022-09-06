import React from 'react'
import Header from './header.jsx'
import Posts from './posts.jsx'
import Sidebar from './sidebar.jsx'

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
