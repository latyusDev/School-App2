import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('member'));

const userAuth = ()=>{
    
    return user
    
}
const ProtectedRoute = () => {

  const isAuth = userAuth()
  return  isAuth ? <Outlet /> : <Navigate to="/SignUp" />
}

export default ProtectedRoute