import React, { useState,useContext, createContext, useEffect } from "react";
import {BsFillHouseDoorFill, BsList} from "react-icons/bs";
import { distribute } from "./CLASS/clasS";
import SectionInfo from "./infoSection";
import StudentCard from "./StudentCard";
import Class from './CLASS/clasS'


const StudentInfo = ({filterStudentDetail, input, setStudents,  handleSection, students, changeOver}) => {

    return (
            <SectionInfo students={students} 
            handleSection={handleSection} 
            input = { input}
            filterStudentDetail={filterStudentDetail}
             changeOver={changeOver}
             setStudents={setStudents}
             />
             
        )
}
export default StudentInfo