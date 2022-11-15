import React from "react";
import { BsArrowLeft, BsFillArrowLeftCircleFill } from "react-icons/bs";
import profile from '../../images/a1.jpg'
import { Link } from "react-router-dom";
const Profile = ({profile})=>{

    return(
        <div>
            

            {profile.map(profile => {

         const {name, id, classes, image, rad,section, school, phone, email, classRoom, birthday, username} = profile
                return (

                    
                    <div>
                    <Link to='/information'>
                    < BsFillArrowLeftCircleFill  className="text-[#7990A3] text-[2rem] animate-bounce my-4 ml-5" />
                   </Link>

                 <div className="grid grid-cols-[2fr_2fr] gap-[2rem]">
                    <div className="">
                   <div className="bg-[#7990A3] opacity-[0.8]w rounded-br-[40%] border-[2px] border-[#7990A3]  pt-[3rem] pl-5">
                    <div className="w-[130px] h-[130px]   mt-14 rounded-full">
                        <img src={image} alt="image" className=" w-[100%] h-[100%]  rounded-full"/>
                    </div>
                    <h1 className="mt-3 text-[2rem] capitalize">{name}</h1>
                    <p className="pb-2">matric: {id.slice(3, -1)}</p>
                   </div>

                   <div className="bg-[#7990A3] opacity-[0.8]w rounded-tr-[40%] border-[2px] border-[#7990A3] mt-9  pt-[1.6rem] pl-5">
                   <h1 className="text-center  text-[2rem] capitalize mt-5 ">personal information </h1>

                   <ul className="mt-9 px-3">
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "><div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>full name</p> <p>{name}</p></div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>username</p> <p>{username}</p> </div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>email </p>  <p>{email}</p></div></li>
           
           </ul>
                   </div>

                   <div className="bg-[#7990A3] opacity-[0.8]w mt-9 rounded-tr-[40%] border-[2px] border-[#7990A3]  pt-[1.6rem] pl-5">
            
            <ul className="mt-9 px-3">
            
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>gender</p> <p>{rad}</p> </div></li>
            
            </ul>
            </div>
                    </div>

                    
                    <div>
                  <div>

                  <div className="bg-[#7990A3] opacity-[0.8]w rounded-bl-[40%] border-[2px] border-[#7990A3]  pt-[1.6rem] pl-5">
                    
                                {/* second */}

                  <ul className="mt-14 px-3">

                <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>phone </p> <p>{phone} </p></div></li>
                <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>class</p> <p>{classes}</p> </div></li>
                <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>section</p> <p>{section}</p> </div></li>
                {/* <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>section</p> <p>{section}</p> </div></li> */}
                </ul>
            </div>

            <div className="bg-[#7990A3] opacity-[0.8]w mt-9 rounded-tl-[40%] border-[2px] border-[#7990A3]  pt-[1.6rem] pl-5">
            
            <ul className="mt-9 px-3">
            
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>transport</p> <p>{school}</p> </div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>classRoom</p> <p>{classRoom}</p> </div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-5 capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>section</p> <p>{section}</p> </div></li>
            <li className="border-b-[1px] border-[#011E3D] mb-9 pb-[0.62rem] capitalize "> <div className=" flex justify-between  items-start font-[500] mr-[3.5rem] text-right"><p>birthday</p> <p>{birthday}</p> </div></li>
            </ul>
            </div>

            
                    

                  </div>
                  
                    </div>
                </div>
                </div>
                )
            })}
        </div>
    )
}


export default Profile