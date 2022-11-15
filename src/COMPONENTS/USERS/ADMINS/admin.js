import React, { useState } from "react";
import Form from "../form";
import profilePicture from '../../../images/latyusDev.JPG'
import NewAdmin from "./newAdmin";
import Admins from "./admins";
const Admin = () =>{
    const [admin, setAdmin] = useState(true)
    const [newAdmin, setNewAdmin] = useState(false)

    const handleAdminSelector = (e)=>{

        const id = e.target.dataset.id

        if(id){

            if(id === 'Admins'){

                setAdmin(true)

        }else{
            
            setAdmin(false)

        }

        if(id === 'newAdmin'){
            setNewAdmin(true)
            
        }else{
            setNewAdmin(false)
        }
        }
    }

    return(
        <div onClick={handleAdminSelector} className="mb-14 ">
            <div className="flex gap-[4rem] mt-9">
                <h3 data-id="Admins" className={`${admin ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>Admins</h3>
                <h3 data-id="newAdmin" className={`${newAdmin ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>new</h3>
            </div>
            <div className=" mt-3 border-b-[2px] border-t-[2px] border-[#152036]">
            <div className="my-7  px-14">
                
               <div>
               {admin && <Admins/> }
               </div>
               <div>

               {newAdmin && <NewAdmin /> }
               </div>
            
            </div>
            </div>
        </div>
    )
}

export default Admin