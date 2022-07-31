import React , { useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {provider , db , auth} from './FirebaseConfig'
import firebase from 'firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Todo from './components/Todo';


const SignInWithGoogle = () =>{

  console.log("clicked!");
  auth
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
   var user = result.user;


    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

const SignIn=()=>{
    return(
<button type="button" onClick={SignInWithGoogle} class="googleSignin">Continue with Google <img className="g_logo" src="/search.svg"></img> </button>

    )
}

const Greeting = () =>{
  return(
    <div className="greeting">
      <h1>hey! sign up to continue✌</h1>
    </div>
  )
} 

function App() {

  const [user] = useAuthState(auth);


  return (
    <div className="App">
     <Navbar/>
     {user?<Todo/>:<><Greeting/><SignIn/></>}
     <Footer/>
    </div>
  );
}

export default App;
