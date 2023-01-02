import React, { useState, useEffect } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Routes, Route,  useNavigate } from 'react-router-dom';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { StartPage } from 'pages/StartPage';
import { LoginPage } from 'pages/LoginPage'; 
import { DashboardPage } from 'pages/DashboardPage';
import { AllEventsPage } from 'pages/AllEventsPage';
import { CreateEditEventsPage } from 'pages/CreateEditEventsPage';
import { AccountSettingsPage } from 'pages/AccountSettingsPage';
import { AboutPage } from 'pages/AboutPage'
import { ContactPage } from 'pages/ContactPage'
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from "./reducers/user";
import events from "./reducers/events";

const reducer = combineReducers({
  user: user.reducer,
  events: events.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  //Saves the log in info intil page is closed, and if user is logged in navigates to dashboard
  /* useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/events')
    }
  }, [navigate]) */ 

  // Function that handles login and register
  const handleAction = (id) => {
    const authentication = getAuth();
    // If registering(2), navigates to dashboard if successful, otherwise throws error
    if(id === 2){
    createUserWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      navigate('/dashboard')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check your Password and/or Email');
      }
      if(error.code === 'auth/user-not-found'){
        toast.error('Please check your Password and/or Email');
      }
})
    } 
    // If logging in(1), navigates to dashboard if successful, otherwise throws error.
    // Also navigates to login page if not logged in
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/dashboard')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check your Password and/or Email');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check your Password and/or Email');
          }
 })
    }
  }

  return (
    <> 
    
    <Provider store={store}>
    <GlobalStyles />
    <ToastContainer />
    <Navbar />
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/events" element={<AllEventsPage />} />
      <Route path="/create-events" element={<CreateEditEventsPage />} />
      <Route path="/account-settings" element={<AccountSettingsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route 
      path="/login" 
      element={<LoginPage 
        title="Login"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(1)}
        />} />
      <Route 
      path="/register" 
      element={<LoginPage 
        title="Register"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(2)}
        />} />
    </Routes>
    <Footer />
    </ Provider>
    </>
  );
}
