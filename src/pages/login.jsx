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
    <div className='mt-28'>
      <button onClick={signInWithGoogle}>SignIn With Google</button>
    </div>
    
  )
}
