import React, { useContext, useState } from "react";
import Student from '../../../images/a1.jpg'
import { TeacherProps } from "./teacher";

const NewTeacher = ()=>{

  const {teachers, handleSubmit, handleChange, picture, read} = useContext(TeacherProps)
    

    return(
        <section className="mx-5">
            <div>
            <div className="px-9 py-6 ">
            <div className="my-8 w-[120px]  h-[120px]">
                    <img src={picture} alt='image' className="rounded-[50%]  h-[100%] w-[100%]"/>
                </div>                
                <form onSubmit={(e)=>handleSubmit(e)} className="mt-3">
                    <div className="flex items-center mb-5  justify-between ">   
                        <label className="font-[helvetica]   text-[#152036] font-[700] capitalize">name</label>  
                        <div className="w-[100%] max-w-[600px]"> 
                        <input  onChange={(e)=>handleChange(e)} value={teachers.name}  name="name"  type='text' className="pl-4 text-lg py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Name" />
                        </div>
                    </div>

                   <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">username</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input  onChange={ (e)=>handleChange(e)} value={teachers.username}  name="username" type='text' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Username" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]   text-[#152036] font-[700] capitalize">email</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input  onChange={ (e)=>handleChange(e)} value={teachers.email}  name="email" type='email' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] "   placeholder="Email" />
                        </div>
                        </div>
                        <div className="flex items-center mb-5  justify-between">
                        <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">phone</label>
                            <div className="w-[100%] max-w-[600px]">
                            <input  onChange={ (e)=>handleChange(e)} value={teachers.phone}  name="phone" type='tel' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Phone" />
                            </div>
                        </div >
                        <div className="flex items-center mb-5  justify-between">
                        <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">address</label>
                            <div className="w-[100%] max-w-[600px]">
                            <input  onChange={ (e)=>handleChange(e)} value={teachers.address}  name="address" type='text' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Address" />
                            </div>
                        </div>
                      
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">Birthday</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input  onChange={ (e)=>handleChange(e)} value={teachers.birthday}  name="birthday" type='date' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Birthday" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">salary</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input  onChange={ (e)=>handleChange(e)} value={teachers.salary}  name="salary" type='text' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="salary" />
                        </div>
                    </div>
                    
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">gender</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='radio'  className="font-[helvetica] mr-3 text-[#152036] font-[700] capitalize"  onChange={(e)=>handleChange(e)} value='male'  name="gender"/>
                        <label  className="font-[helvetica]   mr-7 text-[#152036] font-[700] capitalize">male</label>
                       
                        <input type='radio'  className="font-[helvetica] mr-3 text-[white] drop-shadow-[1px_1px_#152036] text-[#152036] font-[700] capitalize"  onChange={ (e)=>handleChange(e)} value='female'  name="gender"/>
                        <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">female</label>
                        
                        </div>
                    </div>
                    <div className="flex items-center my-11  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">profile photo</label>
                        <div className="w-[100%] max-w-[600px]">
                    <label htmlFor="upload"><img src={picture} className="w-[100px] rounded-[100%]" alt="student"/></label>

                        <input  name="image" type='file' onChange={(e)=>read(e)} id="upload"  className=" hidden pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Profile Photo" />
                        </div>
                    </div>
                    <div>
                    <button type='submit' className=" bg-[#152036] text-[white] drop-shadow-[1px_1px_#152036] px-4 py-3 rounded-full outline-[0] max-w-[20%] border-[1px] border-[#011E3D] "> save</button>
                    </div> 
                </form>
                </div>
            </div>
        </section>
    )
    
}

export default NewTeacher






