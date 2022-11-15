import React, { useState } from "react";
import { FaEye, AiFillDelete } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight,FaTrashAlt,FaTrash, FaRegEye } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import {AdminLists} from './adminList'
    let Admin1 = JSON.parse(localStorage.getItem('Admins'))
const Admins = () =>{
    const [Admins, setAdmins] = useState(AdminLists)
    // const [Admins, setAdmins] = useState(Admin1)
    const [next, setNext] = useState(4)
    const [previous, setPrevious] = useState(0)
    const [f1, setF1] = useState(true)
    const [f2, setF2] = useState(true)
    const [show, setShow] = useState(true)
   const leng = Admins.length
  const showBtn = false
  const removeAdmin = (id)=> {
    const newAdm = Admins.filter(admin => admin.id !== id)
    console.log(id)
    setAdmins(newAdm)
  }
    let tbody = Admins.slice(previous, next)


    const handleNext = ()=>{

        if(next >= leng - 4){

           setF1(false)

        }

        if(previous >= 0){

            setF2(true)
        }
        setShow(false)
        setNext(next + 4)
        setPrevious(previous + 4)

    }
    const handlePrevious = ()=>{

        if(next < leng + 4){

            setF1(true) 
 
         }
         
         if(previous < 4 + 4){

            setF2(false) 
 
         }
        setNext(next - 4)
        setPrevious(previous - 4)

    }
    let accuracy1 = leng < next ? leng : next
    let accuracy2 = next < leng ? next : leng



    return(
        <div className="mt-14">

       <table className="w-[100%]  text-center font-[helvetica]">
            <thead className="border-b-[2px] border-[dotted] border-[#152036]">
            <tr >
            <th className="py-4 capitalize">name</th>
            <th className="py-4 capitalize">username</th>
            <th className="py-4 capitalize">email</th>
            <th className="py-4 capitalize">birthday</th>
            <th className="py-4 capitalize">profession</th>
            <th className="py-4 capitalize">profile</th>
            </tr>
            </thead>
            {tbody.length > 0 ? tbody.map(Admin =>{
        const {name, profession, username, email, id, picture} = Admin
        return(
           <tbody key={id}>
             <tr>
             <td className="border-b-[1px] border-[#152036]">
                <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px]">
                        <img src={picture} alt='picture' className="rounded-[50%] w-[100%] h-[100%]"/>
                    </div>
                    <p>{name}</p>
                </div>
            </td>
            <td className=" border-b-[1px] my-4 py-4 border-[#152036]">{username}</td>
            <td className=" border-b-[1px] my-4 py-4 border-[#152036]">{email}</td>
            <td className=" border-b-[1px] my-4 py-4 border-[#152036]">2020/04/16</td>
            <td className=" border-b-[1px] my-4 py-4 border-[#152036]">{profession}</td>
            <td className=" border-b-[1px] my-4 py-4 border-[#152036]">
                <div className="flex gap-4 my-4 flex-row-reverse">
               
                <button ><FaTrashAlt className="text-[red] text-[2rem]" onClick={()=>removeAdmin(id)}/></button>

                <Link to={`/user/admin/${id}`} >
                    <FaRegEye className="text-[#152036] text-[2rem]" />
                    </Link >
                </div>
            </td>
             </tr>
           </tbody>

        )
    }): <tfoot  className="text-center text-[red] mt-9  "> 

    <tr>
        <td className="py-9"></td>
    </tr>
    <tr>
    <td colSpan={6} className="capitalize animate-bounce text-[red]  text-[7rem]">
    &#x1F644;
     </td>
    </tr>
    <tr>
    
    <td colSpan={6}  className="capitalize font-[monospace] text-[1.3rem]  ">
    No Admin records 
    </td>
    </tr>

</tfoot>}
        </table>  
        <div className="flex justify-between items-end font-[helvetica]">
            <p className="font-[helvetica] mt-4">
                showing {show ? accuracy1  : accuracy2 } of {leng}
            </p>

            {leng > 4  && <div className="flex items-end mt-7">
                <button onClick={handlePrevious}  className={`${f2 ? " pb-1 px-4 border-b-[1px] border-[#152036] border-r[none]" : "hidden"} `}><FaChevronLeft /></button>
                <p className="bg-[#011E3D] px-2 py-1 text-[white] border-b-[1px] border-t-[1px] border-[#ccc]">{ next < leng ? next : leng }</p>
                <button onClick={handleNext} className={`${f1 ? " pb-1  px-4 border-b-[1px] border-[#152036] border-r[none]" : "hidden"}`} ><FaChevronRight /></button>
            </div>}
            
        </div>
          </div>
    )
    //  Admins.length < 4 ? " pb-1  px-4 border-b-[1px] border-[#152036] border-r[none]"
}

export default Admins






