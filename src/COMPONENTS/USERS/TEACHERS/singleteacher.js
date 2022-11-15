import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../SIDEBAR/Sidebar";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsFillArrowLeftCircleFill } from "react-icons/bs";
const SingleTeacher = ({teacherOutput})=>{
    const { id } = useParams()
    
    let singleTeacher = teacherOutput.filter(teacher => teacher.id === id).map((singleTeacher, index) => { 
          
     const { profile, name, email, salary, profession, username, address, phone, gender}  = singleTeacher 
          
    return(

        <div className="m-7" key={index}>
                {/* <BsArrowLeft  className="text-[#7990A3] text-[3rem]"/> */}
                <Link to='/user'>
                < BsFillArrowLeftCircleFill  className="text-[#7990A3] text-[2rem] animate-bounce"/>
                </Link>
               
       <div className="grid grid-cols-[1fr_2fr] gap-9 mt-[5.6rem]">
         <div  className=" font-[helvetica] bg-[#7990A3] text-center py-7 rounded-[15px] shadowi-[5px_5px_8px_7px_#7990A3]"> 
           <div className="w-[200px] rounded-[20px] h-[220px] mx-auto ">
           <img src={profile} alt="image" className="w-[100%] h-[100%] rounded-[15px]"/> 
           </div>
            <div className="text-[#011E3D] font-[helvetica]">
            <h1 className="mt-6 mb-1 text-[1.3rem] font-[500]  capitalize">{name}</h1>
            <h2 className="mt-2">{profession}</h2>
            <h2 className="mt-2">{username}</h2>
            <h2 className="mt-2">{email}</h2>
            <h2 className="mt-2">${salary} monthly payment</h2>
            </div>
        </div>
        <div className="shadowi-[5px_5px_8px_7px_#7990A3]  rounded-[15px] bg-[#7990A3]">
           <ul className="mt-9 px-14">
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize text-[#011E3D]"><div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>full name</p> <p>{name}</p></div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize text-[#011E3D]"> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>email </p>  <p>{email}</p></div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize text-[#011E3D]"> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>phone </p> <p>{phone} </p></div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize text-[#011E3D]"> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>address</p> <p>{address}</p> </div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize text-[#011E3D]"> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>gender</p> <p>{gender}</p></div></li>
           </ul>
        </div>
       </div>
    
        </div>
    )
})

    return(
            <section className="grid  grid-cols-[1fr_3fr]  bg-[#7990A3]">
                <div className="">
                    <Sidebar />
                </div>
         <div className="bg-[#011E3D] ">
          
            {singleTeacher}
        </div>
            </section>
        
    )
}

export default SingleTeacher