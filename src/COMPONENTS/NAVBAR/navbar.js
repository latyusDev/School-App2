import React from 'react'
import { FaFacebookF, FaBars, FaRegWindowClose } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

import avar from '../../images/a1.jpg'
const Navbar = ({setToggle, toggle})=>{
    const handleSideBar = ()=>{
        setToggle(!toggle)
    }

    return(
        <header className="relative z-[99999]">
        <div className="fixed   top-0 left-0 right-0 z-[99999] px-8 text-center text-[2rem] py-3 bg-[#ffffff] shadow-[-1px_0px_9px_#ccc]">
      
       <div className='flex justify-between items-center'>
        <div>
        <div onClick={handleSideBar} className=" md:hidden">
           {toggle ? <FaBars  /> :  <IoIosClose className='text-[3rem] text-[#011E3D]'/> }
        </div>
            <p className='text-[magenta] capitalize text-[2rem] hidden md:block'>latyus<span className=' text-[#3AA4D8]'>College</span> </p>
        </div>
        <div className='flex gap-6 items-center'>
            <div className='w-[47px] '>
                <img src={avar} alt='avar' className='w-[100%] rounded-1/2' />
            </div>
            <p className='text-[0.8rem] text-[#011E3D] capitalize font-[helvetica]'>yunus abdullateef</p>
        </div>
       </div>
       </div>
        </header>
    )
}
export default Navbar