import {useState} from 'react'
import Navbar from './companents/navbar'
import Home from './pages/home'
import Write from './pages/write.jsx'
import Post from './pages/post.jsx'
import NotFound from './pages/notfound.jsx'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [user]=  useAuthState(auth)
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>       
          <Route exact path='/write' element = {<Write/>}/> 
          <Route exact path='/post/:id' element = {<Post/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/update/:id" element={ <Write/>  }/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
