import React ,{useState,useEffect} from 'react'
import Header from '../companents/header'
import Posts from '../companents/posts.jsx'
import Sidebar from '../companents/sidebar.jsx'
import { getDocs, query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db} from "../firebase";


export default function Home() {
  const [postList, SetPostList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      SetPostList(posts);
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="">
        <Header/>
        <div className="home">
        <Posts postList={postList}/> 
        <Sidebar className="visible md:invisible"/>
        </div>
    </div>
  )
}
