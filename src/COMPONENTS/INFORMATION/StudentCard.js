import React, { useState } from 'react'
import {BsFillHouseDoorFill, BsList} from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function StudentCard({name, id, id2, classes, image, section, students, setStudents}){
        const [opened, setOpened] =  useState(false)
        const removeCard = () =>{
           const remove =  students.filter(student => student.id !== id2)
           setStudents(remove)
        }

        return (
                <div className="shadow-[1px_1px_15px_#e6e6e6] text-[#011E3D] relative rounded-[7px]  hover:shadow-[15px_10px_5px_#ccc] ">
                 
                 <div className=" bg-[red] mt-6 px-4 bg-[#EDF6F5]">
                  <div className="flex items-center justify-between">
                  
                      <h1 className="text-[#3AA4D8]  py-[0] rounded-full text-[1.1rem] font-[helvetica]"><span
                      className="text-[magenta]   ">Latyus</span>College</h1>
                      <div onClick={()=> setOpened(!opened)}>

                  {

                    opened ? <h1 className='text-[1.6rem] text-[#3AA4D8]'> X</h1> : <BsList className="text-[2rem] text-[#3AA4D8]"/>
                    
                  }
                      </div>
                  </div>
                  </div>    
                  <div className="flex items-center gap-5  px-5 py-8">
                      <div>
                          <img src={image} alt="student" className="h-[80px] w-[80px] rounded-full" />
                      </div>
                      <div>
                          <h1 className="font-bold font-[cursive] capitalize text-[1.2rem] text-[#011E3D]">{name}</h1>
                          <h2 className="  text-[1.2rem] font-bolder font-[serif]">{classes}</h2>
                          <h3 className="  text-[1.2rem] font-bolder font-[serif]">{section}</h3>
                          <h4 className=" text-[#011E3D] text-[1.1rem] font-bolder font-[serif]">Matric: {new Date().getTime().toString().slice(3, -1)}</h4>
                      </div>
                  </div>
                  {opened && <div className={`${" w-[140px]  opacity-[0.9]  font-[cursive]   absolute top-[70px] right-[20px] bg-[#EDF6F5]"}`}>
                      <div className="list-none w-[100%]  ">
                        <Link to={`/information/studentProfile/${id}`}>
                          <button className="py-2 border-b-[1px] w-[100%] hover:bg-[magenta] hover:text-[#EDF6F5] block">profile</button>
                        </Link>
                          <button className="py-2 border-b-[1px] w-[100%] hover:bg-[magenta] hover:text-[#EDF6F5] block">mark</button>
                          <button className="py-2 border-b-[1px] w-[100%] hover:bg-[magenta] hover:text-[#EDF6F5] block" onClick={(id)=>removeCard(id)}>delete</button>
                      </div>
                  </div>}
                  </div>
        
            
            // </div>
    )
}

