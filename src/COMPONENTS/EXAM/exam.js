import React from "react";
import Navbar from "../NAVBAR/navbar";
import Sidebar from "../SIDEBAR/Sidebar";
import Sidebar2 from "../SIDEBAR2/Sidebar2";

const Exam = ({toggle, setToggle})=>{
    return(
        <section  className="pt-[4rem]">

        <Navbar toggle={toggle} setToggle={setToggle}/>

            <div className=" grid gap-y-[1rem] md:grid-cols-[1fr_3fr] ">

            <Sidebar/>
            <Sidebar2 toggle={toggle} setToggle={setToggle}/>
            <div>
                <h1 className="text-center mt-[15rem] text-[2rem] font-[helvetica]">
                    Exam
                </h1>
            </div>
            </div>

        </section>
    )
}

export default  Exam