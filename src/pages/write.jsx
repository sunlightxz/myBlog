import React, { useState, useEffect } from "react";
import { addDoc,updateDoc, collection,doc ,serverTimestamp} from "firebase/firestore";
import { db, auth, storage} from "../firebase";
import { useNavigate,useParams } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import "firebase/compat/storage";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

export default function Write() { 
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [user] = useAuthState(auth);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const {id} = new useParams()
  let navigate = useNavigate();
  
  const imagesListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    if (imageUpload == null) return;
    const imagesListRef = ref(storage, `images/${imageUpload.name + v4()}`);
    if(!id){
    try {
      await uploadBytes(imagesListRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          addDoc(postsCollectionRef, {
            title,
            postText,
            imageUrl: url,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid , profilePic:auth.currentUser.photoURL,timestamp: serverTimestamp()},
          });
        });
      });
    }
    catch(err){
      console.log(err)
    }
    } else {
     try {  
      await uploadBytes(imagesListRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(id);
          updateDoc(doc(db,"posts",id), {
            title,
            postText,
            imageUrl: url,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid , profilePic:auth.currentUser.photoURL,timestamp: serverTimestamp()},          });
       });
        });
            // "Blog created successfully");

     }
     catch(err){
      console.log(err)
     }
    }

    navigate("/");
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className=" pt-14 w-full">
       <img className=' object-cover rounded-md h-64 w-3/4 mx-auto mt-14' src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80" alt="" /> 
        <div className="ml-36 flex items-center">
          <label htmlFor="imgupload">
            <i className="w-6 h-6 rounded-full border-solid border-2 flex justify-center items-center text-xl cursor-pointer text-gray-500  fa-solid fa-plus"></i>
          </label>
          <input id="imgupload" 
            type="file" className='hidden' 
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <input className='text-2xl p-4 w-8/12 focus:outline-none text-gray-700'
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="ml-36 ">
        <textarea
            className='text-xl py-3 px-4 w-8/12 focus:outline-none h-56 text-gray-700 resize-none'
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        {/* <textarea class=" border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required=""></textarea> */}

          <button onClick={createPost} className='absolute top-22 right-10 text-white bg-green-700 px-3 py-2 rounded-md cursor-pointer'>
            {id ? "Update Post" : "Submit Post"}
          </button>
        </div>
    </div>
  )
}