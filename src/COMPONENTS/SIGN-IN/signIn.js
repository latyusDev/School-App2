import React,{ useRef, useState } from "react";
import { FaFacebookF, FaBars } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import {useNavigate, Link } from "react-router-dom";

const getItems = JSON.parse(sessionStorage.getItem('member'))

const SignIn = ()=>{
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState('')
    const [remember, setRemember] = useState('Remember me')
    const [checkIt, setCheckIt] = useState(false)
    const refContainer = useRef(null)

    const navigate = useNavigate()
    // console.log(getItems.password)
    // const check = refContainer.current

    const handleCheck =()=>{
        const check = refContainer.current.checked

        if(check === true){
            console.log('yes')
            setCheckIt(true)
            setRemember('checked')
        }else{
            setRemember('remember me')
            setCheckIt(false)
        }
    }
    
    const handleSubmit = (e)=>{
        const check = refContainer.current.checked
        e.preventDefault()
        
        if(!password || !email || !check){
            setAlert('input all fields')
            setRemember('check me!')
            setTimeout(()=>setAlert(''), 3000)
        }else{
           navigate('/dashboard')
        }
    }
    return(
        <section className="flex justify-center items-center
        bg-[#e4e8eb]
        min-h-[617px]"
        >
        <form onSubmit={handleSubmit} className="w-[100%] max-w-[450px] bg-[white] rounded-lg font-[helvetica] ">
            <h1 className="py-5 text-center font-[helvetica]
            text-[2rem] uppercase
            text-[white] bg-[#011E3D] rounded-t-lg  rounded-b-sm">sign in now</h1>
            <h2 className={password && email && checkIt ? 'text-center text-[green] pt-4 font-[helvetica] ' : 'text-center text-[red] pt-4 text-lg capitalize font-[helvetica] ' }>
            {alert} </h2>
            
       <div className="px-6">
       <div className="mt-5">
       <input type="email" name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-[100%] border-[1px] border-[#ccc] px-4 outline-[0] rounded-[6px] py-2"
        placeholder="User Email" />
        </div>
        <div className="mt-5">
        <input type="password" name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-[100%] border-[1px] border-[#ccc] px-4 outline-[0] rounded-[6px] py-2"
        placeholder="Password" />
        </div>
        <div className="flex justify-between  items-center mt-4">
        <div className="flex gap-2">
            <input type="checkbox" ref={refContainer} onClick={handleCheck} name="checkbox" className="bg-[red]" />
            
            {checkIt ? 
            <label 
            className={`text-[#7990A3] text-sm  ${checkIt && "text-[green]"}`}
            
            >{remember} &#128077;</label> :
            <label 
            className={`text-[red] text-sm ${checkIt && " text-[red]"}`}
            
            >{remember} </label> 
            }
        </div>
        <p className="text-[#011E3D]  text-[1rem] capitalize">forgotten password</p>
        </div>
        <button type="submit" className=" border-b-[5px] border-[#476181] w-[100%] roungded-b-[9px] rounded-lg uppercase mt-4 pt-4 pb-2 text-[1rem] text-[white] bg-[#011E3D]">sign in</button>
        <h1 className="text-center text-[#476181] font-[helvetica] text-[1rem] mt-3">or  you can sign in via social network</h1>

        <div className="flex justify-between  mx-auto mt-3  ">
        <button type="button" className="border-b-[5px] border-[#2775E2] hover:border-[#5193EA]  bg-[#5193EA] hover:bg-[#2775E2] pl-6 pr-9 rounded-b-[5px] rounded-[5px] font-[helvetica] py-3 text-[white] flex items-center gap-2  ">
            <FaFacebookF className="text-[2rem] " />
            <p>facebook</p>
        </button>
        <button type="button" className="border-b-[5px] border-[#2BB4E8] hover:border-[#44CCFE] rounded-b-[5px] bg-[#44CCFE] hover:bg-[#2BB4E8] pl-8 pr-11 rounded-[5px] font-[helvetica] py-3 text-[white] flex items-center gap-2  ">
        <BsTwitter className="text-[2rem] " />
            <p>twitter</p>
        </button>
       
        </div>
        <div className="flex justify-between  mt-4">
            <p className="text-[#5193EA]">don't have an account ?  </p>
            <p className="text-[#44CCFE]">
                <Link to="/SignUp">
                create an account
                </Link>
                </p>
        </div>

       </div>
       <div className="py-2 border-b-[5px] rounded-lg border-[#011E3D] "></div>
        </form>
        </section>
    )
}

export default SignIn


































































































// import React, { useState } from "react";
// const  Users = {
//         firstName:'',
//         lastName:'',
//         userName:'',
//         Email:'',
//         phone:'',
//         address:''
// }
// const SignIn = ()=>{
//     // const [values,setValues] = useState(Users)
//     const [people,setPeople] = useState([])
//     const [firstName,setFirstName] = useState('') 
//     const [lastName,setLastName] = useState('') 
//     const [email,setEmail] = useState('') 
//     const [phone,setPhone] = useState('') 
//     const [username,setUsername] = useState('') 
//     const [address,setAddress] = useState('') 

//     const submit = (e)=>{
//         e.preventDefault()
//         const Users = {firstName,lastName,email,address,phone,username}
//         sessionStorage.setItem('users',JSON.stringify(Users))
//         const userDetails = JSON.parse(sessionStorage.getItem('users'))
//         console.log(userDetails)
//         window.location ="/welcome"
//     }
//     return (
//         <section>
//         <div>
//         <div className="px-9   py-6 ">
//         <h1 className="text-serif pb-7  text-[2rem]  text-[#152036] font-[700] capitalize"> new</h1>
//             <form onSubmit={submit}>
//                 <div className="flex items-center mb-5  justify-between ">
//                     <label className="font-[helvetica]   text-[#152036] font-[700] capitalize">first name</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='text' onChange={(e)=>setFirstName(e.target.value)} value={firstName} className="pl-4 text-lg py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Name" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between ">
//                     <label className="font-[helvetica]   text-[#152036] font-[700] capitalize">last name</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='text' onChange={(e)=>setLastName(e.target.value)} value={lastName} className="pl-4 text-lg py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Name" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">username</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='text' onChange={(e)=>setUsername(e.target.value)} value={username} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Username" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica]   text-[#152036] font-[700] capitalize">email</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='email'  onChange={(e)=>setEmail(e.target.value)} value={email} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " required  placeholder="Email" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">phone</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='tel'  onChange={(e)=>setPhone(e.target.value)} value={phone} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Phone" />
//                     </div>
//                 </div >
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">address</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='text'  onChange={(e)=>setAddress(e.target.value)} value={address} className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Address" />
//                     </div>
//                 </div>
//                 {/* <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">Birthday</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='date' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Birthday" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">salary</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='text' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="salary" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica] text-[#152036] font-[700] capitalize">password</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='password' className="pl-4 py-3 rounded-lg outline-[0] w-[100%] border border-[2px] border-[#EEEDF0] " placeholder="Password" />
//                     </div>
//                 </div>
//                 <div className="flex items-center mb-5  justify-between">
//                 <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">gender</label>
//                     <div className="w-[100%] max-w-[600px]">
//                     <input type='radio'  className="font-[helvetica] mr-3 text-[#152036] font-[700] capitalize" name="gender"/>
//                     <label  className="font-[helvetica]   mr-7 text-[#152036] font-[700] capitalize">male</label>
                   
//                     <input type='radio'  className="font-[helvetica] mr-3 text-[white] drop-shadow-[1px_1px_#152036] text-[#152036] font-[700] capitalize" name="gender"/>
//                     <label  className="font-[helvetica]  text-[#152036] font-[700] capitalize">female</label>
                    
//                     </div>
//                 </div>
//                  */}
//                 <div>
//                     {/* <input type="submit" /> */}
//                 <button type='submit' className=" bg-[#152036] text-[white] drop-shadow-[1px_1px_#152036] px-4 py-3 rounded-full outline-[0] max-w-[20%] border border-[2px] border-[#EEEDF0] "> save</button>
//                 </div>
//             </form>
//             </div>
//         </div>
//     </section>
//     )
// }

// export default SignIn