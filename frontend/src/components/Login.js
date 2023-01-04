import React, { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userSlice';
import './login.css'

export const Login = () => {
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  
 // add navigate function to dashboard
  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
    // returns  an auth object after a successful authentication
    // userAuth.user contains all our user details
      .then((userAuth) => {
      // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
// display the error if any
      .catch((err) => {
        alert(err);
      });
  };

// A quick check on the name field to make it mandatory
  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
      // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          )
          .catch((err) => {
            console.log('user not updated');
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <div className='login'>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required for registering)'
            type='text'
          />

          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
          />
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
          />
          <button type='submit' onClick={loginToApp}>
            Sign In
          </button>
        </form>

        <p>
          Not a member?{' '}
          <span className='login__register' onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}
