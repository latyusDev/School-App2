import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import {  FaChalkboardTeacher, FaUserGraduate, FaCheck } from "react-icons/fa";
import { SiStatuspage } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import Admin from "./ADMINS/admin";
import { majorities} from "./majority";
import Student from "./STUDENTS/student";
import Teacher from "./TEACHERS/teacher";
import Navbar from "../NAVBAR/navbar";
import Sidebar2 from "../SIDEBAR2/Sidebar2";

const Users = ({toggle, setToggle})=>{
    
    const [admin,setAdmin] = useState(false)
    const [teacher,setTeacher] = useState(true)
    const [student,setStudent] = useState(true)
    const [parent,setParent] = useState(true)
    const [admission,setAdmission] = useState(true)
    const handler = (e)=>{

        const title = ['admin','teacher','parent','student','admission']
       
        
        const id = e.target.dataset.id
        
          if(id){

            if(id === title[0]){
                setAdmin(false)
            }else{
                setAdmin(true)
            }
            
            if(id === title[1]){
                setTeacher(false)
                
            }else{
                setTeacher(true)
            }

            if(id === title[2]){
                setParent(false)
            }else{
                setParent(true)
            }
            if(id === title[3]){
                setStudent(false)
            }else{
                setStudent(true)
            }
          }
    }
    return (
        <section  className="pt-[4rem]">
        <Navbar toggle={toggle} setToggle={setToggle} />
            <div className="grid gap-y-[1rem] grid-cols-[1fr_3fr]  ">
           

         
               
                <Sidebar/>
    <Sidebar2 toggle={toggle} setToggle={setToggle}/>

          
          <div>
            <header>
            
                <div className="   w-[100%] mt-8" onClick={(e)=>handler(e)}>
                
                        <ul className="flex justify-between max-w-[750px]  ">

                            <li  className={`${admin ? "capitalize flex flex-col items-center  font-[600] text-[#152036] font-[helvetica] text-[1.6rem]  list-none": "capitalize flex flex-col items-center  font-[600] font-[helvetica] text-[1.6rem] text-[#73889A] list-none"}`}>
                            < FaChalkboardTeacher data-id="admin" className={`${admin ? "text-[4rem] text-[#152036]" : "text-[4rem] text-[#73889A]"}`}/>
                            <p data-id="admin">Admin</p>
                            </li>
                            
                            <li    className={`${teacher ?  "capitalize flex flex-col items-center  font-[600] text-[#152036] font-[helvetica] text-[1.6rem]  list-none": "capitalize flex flex-col items-center  font-[600] font-[helvetica] text-[1.6rem] text-[#73889A] list-none"}`}>
                                < FaChalkboardTeacher data-id="teacher" className={`${teacher ? "text-[4rem] text-[#152036]" : "text-[4rem] text-[#73889A]"}`} />
                            <p data-id="teacher">teacher</p>
                            </li>

                            <li   className={`${parent ? "capitalize flex flex-col items-center  font-[600] text-[#152036] font-[helvetica] text-[1.6rem] list-none": "capitalize flex flex-col items-center  font-[600] font-[helvetica] text-[1.6rem] text-[#73889A] list-none"}`}>
                            < FiUsers data-id="parent"  className={`${parent ? "text-[4rem] text-[#152036]" : "text-[4rem] text-[#73889A]"}`}/>
                            <p data-id="parent" >parent</p>
                            </li>

                            <li    className={`${student ? "capitalize flex flex-col items-center  font-[600] text-[#152036] font-[helvetica] text-[1.6rem] list-none": "capitalize flex flex-col items-center  font-[600] font-[helvetica] text-[1.6rem] text-[#73889A] list-none"}`}>
                            < FaUserGraduate data-id="student" className={`${student ? "text-[4rem] text-[#152036]" : "text-[4rem] text-[#73889A]"}`}/>
                            <p data-id="student">student</p>
                            </li>

                            <li   className={`${admission ?  "capitalize flex flex-col items-center  font-[600] text-[#152036] font-[helvetica] text-[1.6rem] list-none": "capitalize flex flex-col items-center  font-[600] font-[helvetica] text-[1.6rem] text-[#73889A] list-none"}`}>
                            < FaCheck data-id="admission" className={`${admission ?  "text-[4rem] text-[#152036]" : "text-[4rem] text-[#73889A]"}`}/>
                            <p data-id="admission" >Admission</p>
                            </li>
                           
                            
                        </ul>
                </div>
            </header>
                <div className={`${admin ? 'hidden' : 'visible'}`}>
                <Admin/>
                </div>
                <div className={`${teacher ? 'hidden' : 'visible'}`}>
                <Teacher 
                teacher = {teacher}
                setTacher ={setTeacher} 
                />
                </div>
                <div className={`${student ? 'hidden' : 'visible'}`}>
                    <Student/>
                
                </div>
          </div>
            </div>
        </section>
    )
}
export default Users