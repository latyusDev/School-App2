import React,{useEffect} from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const user = JSON.parse(sessionStorage.getItem('member'));
// console.log(user)
const userAuth = ()=>{
    
    return user
    
}
const ProtectedRoute = () => {
  // useEffect(() => {
  //   // sessionStorage.setItem('member', JSON.stringify(member))
  //   userAuth()
  
  // }, [])

  const isAuth = userAuth()
  return  isAuth ? <Outlet /> : <Navigate to="/SignUp" />
}

export default ProtectedRoute