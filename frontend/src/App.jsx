import React from 'react'
import { Route, Routes } from 'react-router'


import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";

import { Toaster } from "react-hot-toast";



const App = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />

    </Routes>

    <Toaster />
    </>
  )
}

export default App
