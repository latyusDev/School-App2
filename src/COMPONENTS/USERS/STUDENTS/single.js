import React, { useState } from "react";
import Student from '../../../images/image-plane.jpg' 
import pictur from '../../../images/image-plane.jpg'
const SingleStudent = ()=>{
    const [image,setImage] = useState(Student)
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [birthday,setBirthday] = useState('') 
    const [password,setPassword] = useState('')
    const [rad,setRadio] = useState('')
    const [address,setAddress] = useState('')
    const [classes,setClasses] = useState('')
    const [section,setSection] = useState('')
    const [rollId,setRollId] = useState('')
    const [school,setSchool] = useState('')
    const [classRoom,setClassRoom] = useState('')
    const [all,setAll] = useState([])
    const [check,setCheck] = useState(true)
    const [validate,setValidate] = useState('input all field')

    const readF =(e)=>{
        const reader = new FileReader()
        const prop = e.target.files[0]
        console.log(prop)
        reader.readAsDataURL(prop)
        reader.onload = ()=>{
            setImage(reader.result)
        }
    }

    const handler = (e)=>{
        e.preventDefault()
        const form = {name,school,section,rollId,classes,classRoom,rad,password,birthday,phone,image,username,email,id:new Date().getTime().toString(), opened: false}
        // const get = [...form,form]
        // console.log(get)
        if(!name || !school || !section || !rollId || !classes || classes === 'select' || !classRoom || !rad || !password || !birthday || !phone || !image || !username || !email){
            console.log('input all field')
            setCheck(false)
        }else{
            
            localStorage.setItem('users',JSON.stringify(all))
            let people = JSON.parse(localStorage.getItem('users'))
            localStorage.setItem('people',JSON.stringify(people))
            setAll([...all,form])
            console.log(all)
            setCheck(true)
            setValidate('well done')

        }
    }

    return(
        <section>
            <div>
            <div className="px-14  py-6 ">
            <div className="my-14 w-[120px]  h-[120px]">
                    <img src={image} alt='image' className="rounded-[50%]  h-[100%] w-[100%]"/>
                </div>                        <div>
                            <h1 className={`${check ? 'hidden' : 'visible text-red-500 font-mono text-[2rem] text-center pb-5'}`}> {validate}</h1>
                        </div>
                <form onSubmit={handler}>
                    <div className="flex items-center mb-5  justify-between ">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">name</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} className="pl-4 text-lg py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Name" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">username</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Username" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">email</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " required  placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">phone</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='tel' value={phone} onChange={(e)=> setPhone(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Phone" />
                        </div>
                    </div >
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]   text-[#152036] font-[700] capitalize">address</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='text' value={address} onChange={(e)=> setAddress(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Address" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">birthday</label>
                        <div className="w-[100%] max-w-[600px]">
                        <input type='date' value={birthday} onChange={(e)=> setBirthday(e.target.value)}  className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Birthday" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica]   text-[#152036] font-[700] capitalize">gender</label>
                        <div className="w-[100%] max-w-[600px]">
                        
                        <input type='radio' value='Male' onChange={(e)=> setRadio(e.target.value)}  className="font-[helvetica] mr-3   text-[#152036] font-[700] capitalize" name="gender"/>
                        <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize mr-7">male</label>
                       
                        <input type='radio' value='Female' onChange={(e)=> setRadio(e.target.value)}  className="font-[helvetica] mr-3   text-[#152036] font-[700] capitalize" name="gender"/>
                        <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">female</label>
                        </div>
                    </div>
                   
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">password</label>
                        <div className="w-[100%] max-w-[600px]">

                        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Password" />
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">roll ID</label>
                        <div className="w-[100%] max-w-[600px]">
                            <select placeholder="select" onChange={(e)=> setRollId(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " >
                                <option value="select">select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036]  font-[700] capitalize" >class</label>
                        <div className="w-[100%] max-w-[600px]">
                            <select placeholder="select"  onChange={(e)=> setClasses(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " >
                                <option value="select" className="text-[#A8A3B6]">select</option>
                                <option value="class 1" className="text-[#A8A3B6]">class 1</option>
                                <option value="class 2" className="text-[#A8A3B6]">class 2</option>
                                <option value="class 3" className="text-[#A8A3B6]">class 3</option>
                                <option value="class 4" className="text-[#A8A3B6]">class 4</option>
                                <option value="class 5" className="text-[#A8A3B6]">class 5</option>
                                <option value="class 6" className="text-[#A8A3B6]">class 6</option>
                                <option value="class 7" className="text-[#A8A3B6]">class 7</option>
                                <option value="class 8" className="text-[#A8A3B6]">class 8</option>
                                <option value="class 9" className="text-[#A8A3B6]">class 9</option>
                                <option value="class 10" className="text-[#A8A3B6]">class 10</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">section</label>
                        <div className="w-[100%] max-w-[600px]">
                            <select placeholder="select"  onChange={(e)=> setSection(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " >
                                <option value="select">select</option>
                                <option value="section A">section A</option>
                                <option value="section B">section B</option>
                                <option value="section C">section C</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">classroom</label>
                        <div className="w-[100%] max-w-[600px]">
                            <select placeholder="select" onChange={(e)=> setClassRoom(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " >
                                <option value="select">select</option>
                                <option value="class room 1">class room 1</option>
                                <option value="class room 2">class room 2</option>
                                <option value="class room 3">class room 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">school bus</label>
                        <div className="w-[100%] max-w-[600px]">
                            <select placeholder="select" onChange={(e)=> setSchool(e.target.value)} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " >
                                <option value="select">select</option>
                                <option value="transport 1">transport 1</option>
                                <option value="transport 2">transport 2</option>
                                <option value="transport 3">transport 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  justify-between">
                    <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">profile photo</label>
                         <div className="w-[100%] max-w-[600px]">
                    <label htmlFor="upload"><img src={image} className="w-[100px] rounded-[100%]" alt="student"/></label>

                        <input  name="image" type='file' onChange={(e)=>readF(e)} id="upload"  className=" hidden pl-4 py-3 rounded-lg outline-[0] w-[100%] border-[1px] border-[#011E3D] " placeholder="Profile Photo" />
                        </div>
                    </div>
                   
                    <div className="mt-14">
                    <button type='submit' className=" border-none bg-[#152036] text-[white] drop-shadow-[1px_1px_#152036] px-4 py-3 rounded-full outline-[0] max-w-[20%] border-[1px] border-[#011E3D] "> save</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default SingleStudent