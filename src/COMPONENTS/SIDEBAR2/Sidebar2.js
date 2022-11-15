import React, { useState } from "react";
import profile from '../../images/image-confetti.jpg'
import { IoIosClose } from "react-icons/io";
import {Link, NavLink} from 'react-router-dom'
import { BsPersonCheck } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
     MdSpeakerNotes,
     MdSpaceDashboard,
     MdPermDeviceInformation,
     MdNotificationsActive,
     IoMdInformation
     } from "react-icons/md";
import latyusDev from '../../images/st2.jpg'
import './sidebar.css'
const  Sidebar2 = ({setToggle, toggle})=>{
    const [verify, setVerify] = useState(false)
    return(
       
        <header className={` " pt-20 fixed top-0 bottom-0 z-[999]  overflow-y-scroll bg-[#011E3D] w-[0px] ${toggle || " w-[75%] "} overflow-x-hidden sidemenu md:hidden " `}>

       {verify && <div className=" bg-[black] opacity-[0.9] fixed flex items-center justify-center z-[999999]  top-0 bottom-0 left-0 right-0">
         <div className=" z-[999] bg-[white] p-9 text-center rounded-lg w-[100%]  max-w-[400px]  ">
            <h1 className="font-[helvetica] ">Are you sure you want to log out ?</h1>
        <div className="flex justify-center gap-9 bg-[white] mt-5 ">
            
            <div>
            <Link to="/" >

            <button onClick={()=>{
                // setVerify(false)
                setToggle(!toggle)
            }}  className="bg-[green] text-[white] p-4 rounded-lg text-[1rem] capitalize font-[helvetica]">
                yes
            </button>
            </Link>
            </div>
            <div>

            <button onClick={()=>{
                setVerify(false)
                setToggle(!toggle)
            }} className="bg-[red] text-[white] p-4 rounded-lg text-[1rem] capitalize font-[helvetica]">
                no
            </button>
            </div>
        </div>
        </div>
        </div>}
        <nav>
       <div className="  pt-14">
        <div className="mx-auto w-[max-content]">
        <img src={latyusDev} alt="image" className="h-[100px] w-[100px] rounded-[50%]" />
        </div>
            <h1 className="text-[#fff] mt-5 text-center indent-[-9px]  text-lg font-mono">Admin</h1>
        </div>        
       <ul className="mt-7">
       <NavLink to="/" activeclassname="active" className="  border-l-[6px]  border-l-[#011E3D] capitalize    mb-3 text-[#7990A3]   text-lg font-[500]    flex gap-10 items-center px-9  py-2    hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > Dashboard </li> 
       </NavLink>
       <NavLink to="/user" activeclassname="active" className=" capitalize border-l-[6px]  border-l-[#011E3D]   mb-3 text-[#7990A3]   text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li >users </li> 
       </NavLink>
       <NavLink to="/information" activeclassname="active" className=" capitalize border-l-[6px]  border-l-[#011E3D]   mb-3 text-[#7990A3]   text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > informaion </li> 
       </NavLink>
       <NavLink to="/messages" activeclassname="active" className=" capitalize border-l-[6px]  border-l-[#011E3D]   mb-3 text-[#7990A3]   text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > messages </li> 
       </NavLink>
       <NavLink to="/exam" activeclassname="active" className="   mb-3 text-[#7990A3]  capitalize border-l-[6px]  border-l-[#011E3D]  text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > exams</li> 
       </NavLink>
       <NavLink to="/notification" activeclassname="active" className=" capitalize border-l-[6px]  border-l-[#011E3D]   mb-3 text-[#7990A3]   text-lg font-[500]   flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > notificaion </li> 
       </NavLink>
        <NavLink to="/marks" activeclassname="active" className="   mb-3 text-[#7990A3] capitalize border-l-[6px]  border-l-[#011E3D]   text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > marks </li> 
       </NavLink>
       <NavLink to="/schedules" activeclassname="active" className="   mb-3 text-[#7990A3]  capitalize border-l-[6px]  border-l-[#011E3D]  text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > schedules </li> 
       </NavLink>
       <NavLink to="/noticeboard" activeclassname="active" className="   mb-3 text-[#7990A3]  capitalize border-l-[6px]  border-l-[#011E3D]  text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > noticeboard </li> 
       </NavLink>
       <NavLink to="/library" activeclassname="active" className="   mb-3 text-[#7990A3]  capitalize border-l-[6px]  border-l-[#011E3D]  text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li > library </li> 
       </NavLink>
       <div  onClick={()=>setVerify(true)}  className="mb-3 text-[#7990A3]  capitalize border-l-[6px]  border-l-[#011E3D]  text-lg font-[500]    flex gap-10 items-center px-9  py-2  hover:border-l-[#7990A3]  hover:bg-[#7990A3] hover:text-[#011E3D]  ">
       <MdSpaceDashboard  className=" w-[35px] h-[35px]"/>
        <li> log out </li> 
       </div>
        </ul>
        </nav>
        </header>
    )
}

export default Sidebar2