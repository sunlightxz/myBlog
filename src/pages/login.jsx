import React from 'react'
import { signInWithPopup} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let Navigate = useNavigate();
  
  const signInWithGoogle = ()=> {
    signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("isAuth",true);
    Navigate("/");
  });
}
  return (
    <div className='h-full mt-64'>
     <div className="container flex flex-col justify-center items-center ">
      <h2 className='text-4xl font-medium mb-6'>My Blog</h2>
      <button className='px-3 py-2 border-2 border-black rounded-md font-medium' onClick={signInWithGoogle}><i class="text-red-500 mr-2 fa-brands fa-google"></i>Sign In With Google</button>
     </div>
    </div>
    
  )
}
