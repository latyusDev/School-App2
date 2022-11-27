import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
    
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [alert, setAlert] = useState('')
    const [member, setMember] = useState({})

  
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!password || !email){
            setAlert('input all fields')
            setTimeout(()=>setAlert(''), 3000)
            // localStorage.removeItem('member')
        }else{
            setAlert('Well done, proceed to log in')
            setTimeout(()=>setAlert(''), 3000)
            setMember({...member, email, password, id:new Date().getTime().toString()})
            sessionStorage.setItem('member', JSON.stringify(member))
       
        }
    }
    const setItem = ()=>{

        sessionStorage.setItem('member', JSON.stringify(member))
    }
    useEffect(() => {
        setItem()
    }, [member])
    
  return (
    <section className="flex justify-center items-center
    bg-[#e4e8eb]
    min-h-[617px]"
    >
    <form onSubmit={handleSubmit} className="w-[100%] max-w-[450px] bg-[white] rounded-lg font-[helvetica] ">
        <h1 className="py-5 text-center font-[helvetica]
        text-[2rem] uppercase
        text-[white] bg-[#011E3D] rounded-t-lg  rounded-b-sm">sign up</h1>
   <div className="px-6">
            <h2 className={password && email ? 'text-center text-[green] pt-4 font-[helvetica] ' : 'text-center text-[red] pt-4 text-lg capitalize font-[helvetica] ' }>
            {alert}</h2>
    {/* <div className="mt-5">
        <input type="text" name="text"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}
        className="w-[100%] border-[1px] border-[#ccc] px-4 outline-[0] rounded-[6px] py-2"
        placeholder="Full name" />
    </div> */}

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
    
    <button type="submit" className=" border-b-[5px] border-[#476181] w-[100%] roungded-b-[9px] rounded-lg uppercase mt-4 pt-4 pb-2 text-[1rem] text-[white] bg-[#011E3D]">sign up</button>

    <div className="flex justify-between  mx-auto mt-3  ">
   
   
    </div>
    <div className="flex justify-between  mt-4">
        <p className="text-[#011E3D]">already have an account ?  </p>
        <p className="text-[#5193EA]" onClick={()=>window.location.reload()}>
            <Link to="/">
            sign in
            </Link>
            </p>
    </div>

   </div>
   <div className="py-2 border-b-[5px] rounded-lg border-[#011E3D] "></div>
    </form>
    </section>  )
}

export default SignUp