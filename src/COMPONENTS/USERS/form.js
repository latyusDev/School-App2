import React, { useState } from "react";
import Student from '../../images/a1.jpg'
const Form = ()=>{
    const [picture,setPicture] = useState(Student)
    const [name,setName] = useState('')
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('') 
    const [profession,setProfession] = useState('')
    const [Admins,setAdmins] = useState([])
    
    const handleAdmins = (e)=>{
        e.preventDefault()
        const allAdmins = { name, username, email, phone, address, profession, picture,id: new Date().getTime().toString() }
        setAdmins([...Admins,allAdmins])
        console.log('here',Admins)
        localStorage.setItem('Admins',JSON.stringify(Admins))
    }
    let read = (e)=>{
           const reader = new FileReader()
    const prop = e.target.files[0]
    if(!prop){
        setPicture('no')

    }
    console.log(prop)
    reader.readAsDataURL(prop)
    reader.onload = ()=>{
        setPicture(reader.result)
    } 
}

    
    return(
        <section>
            <div>
            <div className=" my-3 ">
            <div className="my-14 w-[120px]  h-[120px]">
                    <img src={picture} alt='image' className="rounded-[50%]  h-[100%] w-[100%]"/>
                </div>
                <form  onSubmit={handleAdmins}>
                    <div className="flex items-center mb-5  justify-between ">
                        <label className="capitalize font-helvetica text-lg font-[600]">name</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Name" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">username</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text'  value={username} onChange={(e)=>setUserName(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Username" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">email</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" required  placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">phone</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='tel'  value={phone} onChange={(e)=>setPhone(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Phone" />
                        </div>
                    </div >
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">address</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text'  value={address} onChange={(e)=>setAddress(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Address" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">profession</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text'  value={profession} onChange={(e)=>setProfession(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Profession" />
                        </div>
                    </div>
                    
                    <div className="flex items-center mb-5  justify-between">
                    <label className="capitalize font-helvetica text-lg font-[600]">profile photo</label>
                        <div className="w-[100%] max-w-[600px]">
                    <label htmlFor="upload"><div className="mt-14 w-[120px]  h-[120px]">
                    <img src={picture} alt='image' className="rounded-[50%]  h-[100%] w-[100%]"/>
                </div></label>
                        <input type='file' id="upload" onChange={(e)=>read(e)} className=" hidden pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px]  border-[#011E3D]" placeholder="Profile Photo" />
                        </div>
                    </div>
                    <div className="mt-14">
                    <button type='submit'  className="hover:bg-[white] hover:text-[#152036] border-none bg-[#152036] text-[white] drop-shadow-[1px_1px_#152036] px-4 py-3 rounded-full outline-[0] max-w-[20%] border-[1px]  border-[#011E3D]"> save</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Form