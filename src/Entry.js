import React, { createContext, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./COMPONENTS/DASHBOARD/dashboard";
import Users from "./COMPONENTS/USERS/users";
import SignUp from "./COMPONENTS/SIGN-UP/signUp";
import Information from "./COMPONENTS/INFORMATION/information";
import SingleTeacher from "./COMPONENTS/USERS/TEACHERS/singleteacher";
import SingleAdmin from "./COMPONENTS/USERS/ADMINS/singleAdmin";
import StudentProfile from "./COMPONENTS/INFORMATION/studentProfile";
import Exam from "./COMPONENTS/EXAM/exam";
import SignIn from "./COMPONENTS/SIGN-IN/signIn";
import Navbar from './COMPONENTS/NAVBAR/navbar'
import ProtectedRoute from "./COMPONENTS/PROTECTED_ROUTE/protectedRoute";
import Sidebar2 from "./COMPONENTS/SIDEBAR2/Sidebar2";
import { AdminLists } from "./COMPONENTS/USERS/ADMINS/adminList";
import { TeacherLists } from "./COMPONENTS/USERS/TEACHERS/teacherLists";
import { StudentLists } from "./COMPONENTS/INFORMATION/StudentLists";
import Message from "./COMPONENTS/MESSAGES/message";
// const teacherOutput =  JSON.parse(localStorage.getItem('Teacher'))
// const AdminOutput =  JSON.parse(localStorage.getItem('Admins'))
// const studentProfile =  JSON.parse(localStorage.getItem('users'))
const teacherOutput = TeacherLists
const AdminOutput =  AdminLists 
const studentProfile = StudentLists

const  Entry = ()=>{
    const [toggle, setToggle] = useState(true)

    return (
        <BrowserRouter>
            {/* <Sidebar2 toggle={toggle} setToggle={setToggle}/> */}
        <Routes>
            <Route path="/" element ={<SignIn /> } />
            <Route path="/SignUp" element ={<SignUp /> } />
            <Route path="/User" element={<Users toggle={toggle} setToggle={setToggle}/>}/>
            <Route path="/messages" element={<Message toggle={toggle} setToggle={setToggle}/>}/>
            <Route path="/user/teacher/:id" element={<SingleTeacher toggle={toggle} setToggle={setToggle} teacherOutput ={teacherOutput}/>}/>
            <Route path="/user/admin/:id" element={<SingleAdmin toggle={toggle} setToggle={setToggle} AdminOutput ={AdminOutput}/>}/>
            <Route path="/exam" element={<Exam toggle={toggle} setToggle={setToggle}/>}/>
            <Route element ={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard toggle={toggle} setToggle={setToggle}/>} />
            </Route>
            <Route path="/information" element ={<Information toggle={toggle} setToggle={setToggle}/> } />
            <Route path="/information/studentProfile/:id" element={<StudentProfile  studentProfile={studentProfile} /> }/>
        
        </Routes>

        </BrowserRouter>
     
    )
}

export default Entry