import React, { useState,useContext } from "react";
import {BsFillHouseDoorFill, BsList} from "react-icons/bs";
import { distribute } from "./CLASS/clasS";
import { StudentLists} from '../StudentLists'
// let studentDetails = JSON.parse(localStorage.getItem('users'))
const GeneralStudent = ({output})=>{
    // filterStudentDetails = studentDetails.filter(detail => detail.classes === output)
    filterStudentDetails = StudentLists.filter(detail => detail.classes === output)

    const input = filterStudentDetails.map(student =>{
    const {name, classes, id, image, section} = student
    return (
        <div key={id} className="shadow-[1px_1px_15px_#e6e6e6] rounded-[7px] hover:shadow-[15px_10px_5px_#ccc] ">
        <div className=" bg-[red] mt-6 px-3 bg-[#EDF6F5]">  
           <div className="flex items-center justify-between">
           <div className="flex gap-5 gap-y-[2rem] items-center">
           <BsFillHouseDoorFill className="text-[2rem]" />
            <h1 className="text-[#3AA4D8] py-[0] rounded-full text-[1.1rem] font-[courier]"><span 
            className="text-[magenta]  text-[0.7rem] font-[cursive]">latYus</span>College</h1>
            </div>
           <BsList className="text-[2rem]" />
        </div>
        </div>
        <div className="flex items-center gap-5  px-5 py-8">
            <div>
                <img src={image} alt="student" className="h-[80px] w-[80px] rounded-full" />
            </div>
            <div>
                <h1 className="font-bold font-[cursive] capitalize text-[1.3rem] text-[#011E3D]">{name}</h1>
                <h2 className="text-[#ccc]  text-[1.2rem] font-bolder font-[serif]">{classes}</h2>
                <h2 className="text-[#ccc]  text-[1.2rem] font-bolder font-[serif]">{section}</h2>
                <h2 className=" text-[#011E3D] text-[1.1rem] font-bolder  font-[serif]">Roll ID: {id}</h2>

                {/* hnbik */}
            </div>
         </div>
        </div>
    )
})
    
    return (
        <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {input}
            </div>
        </section>
    )
}


export default GeneralStudent