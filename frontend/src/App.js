/* eslint-disable no-unused-vars */
import React from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Routes, Route,  useNavigate } from 'react-router-dom';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { StartPage } from 'pages/StartPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { AllEventsPage } from 'pages/AllEventsPage';
import { CreateEditEventsPage } from 'pages/CreateEditEventsPage';
import { AboutPage } from 'pages/AboutPage'
import { ContactPage } from 'pages/ContactPage'
import { EventDetailsPage } from 'pages/EventDetailsPage';
import { FaqPage } from 'pages/FaqPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'components/ScrollToTop';

export const App = () => {
  const navigate = useNavigate();
  

  //HANDLES THE REGISTRATION OF NEW USER
  const handleRegister = (args) => {
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, args.email, args.password)
    .then((response) => {
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      navigate('/create-events')
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

  //HANDLES THE LOGIN OF EXISTING USERS
  const handleLogin = (args) => {
      const authentication = getAuth();
       signInWithEmailAndPassword(authentication, args.email, args.password)
        .then((response) => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          navigate('/create-events')
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

 
  return (
    <> 
    <ScrollToTop />
    <GlobalStyles />
    <ToastContainer />
    <Navbar />
    <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/events" element={<AllEventsPage />} />
    <Route path="/create-events" element={<CreateEditEventsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/events/:id" element={<EventDetailsPage />} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route 
    path="/login" 
    element={<LoginPage 
      onLogin={handleLogin}
      />} />
    <Route 
    path="/register" 
    element={<RegisterPage 
      onRegister={handleRegister}
      />}
    />
  </Routes>
    <Footer />
    </>
  );
}
