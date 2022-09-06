import Navbar from './companents/navbar'
import Home from './companents/home'
import Write from './companents/write.jsx'
import Post from './companents/post.jsx'
import NotFound from './companents/notfound.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>       
          <Route exact path='/write' element = {<Write/>}/> 
          <Route exact path='/post' element = {<Post/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
