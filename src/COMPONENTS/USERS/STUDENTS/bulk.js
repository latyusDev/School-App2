import React, { useState } from "react";
import { FaTrashAlt, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StudentLists } from "./studentLists";
const Users = JSON.parse(localStorage.getItem('users'))
const Bulk = ()=> {
    // const [people,setPeople] = useState(Users)
    const [people,setPeople] = useState(StudentLists)
   
    const removeStudent = (id)=>{
      const setItems =  people.filter(person =>{
            return person.id !== id
        })
        setPeople(setItems)
    }
    
        return (
            <section className="mt-14">
                        <div className="flex justify-between flex-wrap">
                {people.map(person =>{
                    const {name, id, username, image} = person
                    return <div key={id} className="w-[25%]">
                            <div className="text-center ">
                                <img src={image} alt="student"  className="w-[100px] rounded-full mx-auto h-[100px]"/>
                                <h4 className="capitalize font-bold text-[#1E1E1E] mt-3">{name}</h4>
                                {/* <small>{username}</small> */}

                                <div  className="flex justify-between my-4 flex-row-reverse px-14">
                                <button ><FaTrashAlt className="text-[red] text-[2rem]" onClick={()=>removeStudent(id)}/></button>
                                <Link to={`/information/studentProfile/${id}`}>
                                <FaRegEye className="text-[#152036] text-[2rem]" />
                                </Link>  
                                </div>

                                </div>
                                
                        </div>
                })}
                    </div> 
            </section>
        )
    }

//     return <h1 className="text-center"> student</h1>
// }

export default Bulk