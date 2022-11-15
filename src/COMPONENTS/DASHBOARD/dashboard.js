import React, { useState } from "react";
import image from '../../images/st2.jpg'
import Navbar from "../NAVBAR/navbar";
import Sidebar from "../SIDEBAR/Sidebar";
import Sidebar2 from "../SIDEBAR2/Sidebar2";
import './dashboard.css'

const Dashboard = ({toggle, setToggle}) =>{

    return (
            
            <section  className="pt-[4rem]">
        <Navbar toggle={toggle} setToggle={setToggle}/>
                <div className="grid gap-y-[1rem] md:grid-cols-[1fr_3fr] ">
                    <div>

    <Sidebar />
    <Sidebar2 toggle={toggle} setToggle={setToggle}/>
                    </div>
                    
                <div className=" h-[300px]">
                    <img src={image} className='w-[100%] h-[100%]'  alt={image}/>
                </div>
                </div>
                
            </section>
            

    )
}

export default Dashboard