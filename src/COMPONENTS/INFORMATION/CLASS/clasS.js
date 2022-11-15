import React, { useState,createContext } from "react";
import StudentInfo from "../studentInfo";
import {BsFillHouseDoorFill, BsList} from "react-icons/bs";

const Class = ({changeOver})=>{
    
    
    return(
           <form className="my-10">
               <div>
               <label className="font-[cursive] text-[#011E3D] text-[2rem] block font-bold">classes</label>
               <select  onChange={(e)=>changeOver(e)} className="px-5 mt-4 outline-[0]  w-[100%] rounded-lg border-[#011E3D] border-[1px]  py-3 ">
                <option className="text-[#011E3D]" value="class 1">class 1</option>
                <option className="text-[#011E3D]" value="class 2">class 2</option>
                <option className="text-[#011E3D]" value="class 5">class 5</option>
                <option className="text-[#011E3D]" value="class 3">class 3</option>
                <option className="text-[#011E3D]" value="class 7">class 7</option>
                <option className="text-[#011E3D]" value="class 6">class 6</option>    
               </select>
               </div>
            </form> 
    )
}
export default Class
            