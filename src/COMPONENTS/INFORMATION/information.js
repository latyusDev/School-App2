import React, { useState,useContext, useEffect } from "react";
import Class from "./CLASS/clasS";
import {BsFillHouseDoorFill, BsList} from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { FaBeer} from 'react-icons/fa';
import InfoSection from "./infoSection";
import StudentInfo from "./studentInfo";
import {getAll} from '../../Entry'
import Sidebar from "../SIDEBAR/Sidebar";
import Sidebar2 from "../SIDEBAR2/Sidebar2";
import {StudentLists} from './StudentLists'
import Navbar from "../NAVBAR/navbar";
let studentDetails = JSON.parse(localStorage.getItem('users'))

const Information = ({toggle, setToggle})=>{ 
    const [change,setChange] = useState('class 1')
    // const filterStudentDetail = studentDetails.filter(detail => detail.classes === change)
    const filterStudentDetail = StudentLists.filter(detail => detail.classes === change)
    const [students, setStudents] = useState(filterStudentDetail)

        // console.log(setStudents)
    const handleSection = (exactSection)=>{

        const filterSections =  filterStudentDetail.filter(sect => sect.section === exactSection)

        const All = filterStudentDetail.map(student => student)

         if(exactSection === 'All'){
             setStudents(All)
         }
         
         else{
             setStudents(filterSections)
            }
            
        }
        
        const changeOver = (e)=> {
            setChange(e.target.value)
        }
        
       
    return (
        <section  className="pt-[4rem]">
        <Navbar toggle={toggle} setToggle={setToggle}/>
            <div className=" grid gap-y-[1rem] md:grid-cols-[1fr_3fr] ">


            <div className="">
            <Sidebar/>
            <Sidebar2 toggle={toggle} setToggle={setToggle}/>

            </div>
                <div className="">
                <div className="flex justify-between flex-end pr-9">
                <div className="text-[#011E3D] mt-5 text-[2rem] font-bold capitalize font-[cursive]">
            <BsPersonCheck className="ml-[3.6rem] text-[#011E3D] text-[8rem]"/>
                    <h1>student area</h1>
                </div>
                <div className="w-[100%] mt-10 w-[400px]">
               <Class
                change={change} 
               changeOver={changeOver} 
                setChange={setChange}/>
                
                </div>
                </div>
                <div>
                    <StudentInfo students={students}  setStudents={setStudents}  handleSection={handleSection} filterStudentDetail={filterStudentDetail} changeOver={changeOver}/>
                </div>
                </div>
                </div>
            </section>
    )
}

export default Information




