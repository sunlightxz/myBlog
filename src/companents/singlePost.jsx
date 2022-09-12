import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { useParams,Link,useNavigate} from "react-router-dom";
import { db ,auth} from "../firebase";
import { doc,getDoc ,deleteDoc} from "firebase/firestore";
import {useAuthState} from 'react-firebase-hooks/auth'

export default function SinglePost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [user] = useAuthState(auth)
  const userId = user?.uid;
  const Navigate = useNavigate();
  const getBlogDetail = async() => {
    const docRef = doc(db, "posts",id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data())
  }
  useEffect(()=>{
    id && getBlogDetail();
  },[id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
        Navigate("/");
      } catch (err) {
        console.log(err);
    }
    }
  };
  return (
    <div className='SingleP'>
       <div className="singlePost-wraper p-12">
            <img className='w-full h-80 object-cover rounded-lg' src={blog?.imageUrl} alt="" />
            <h2 className="m-3 text-2xl text-center font-medium font ">
            {blog?.title}
                { user?.uid === blog?.author.id && 
                  (
                  <div className="float-right">
                   {
                    <Link to={`/update/${id}`}>
                      <i className="mr-4 text-green-600 text-xl fa-regular fa-pen-to-square cursor-pointer"></i>
                    </Link>
                   }
                     <i className="mr-1 text-red-600 text-xl fa-solid fa-trash cursor-pointer" onClick={() => handleDelete(blog.id)}></i>
                  </div>
                  )
                }
            </h2>
            <div className="flex justify-between mt-1 mb-5">
                <p className='text-yellow-600 font-light'>Author : <span className='font-medium'>{blog?.author.name}</span> </p>
                <span className='text-yellow-600 font-light'>{blog?.author.timestamp.toDate().toDateString()}</span>
            </div>
            <p className='singlePostDesc text-gray-600'>{blog?.postText}
            </p>
       </div>
    </div>
  )
}
