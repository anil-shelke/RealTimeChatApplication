import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";

import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


function App() {

  const {authUser,checkAuth, isCheckingAuth,onlineUsers} = useAuthStore();

  console.log(onlineUsers)

  useEffect(() => {
    checkAuth()
  },[checkAuth]);

  console.log(authUser);

  if(isCheckingAuth && !authUser){
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>


    )
  }

  return (
    <div className="bg-dark">
      <Navbar/>

      <Routes>

        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login"/>}/>

      </Routes>

      <Toaster/>
    </div>
  );
}

export default App;
