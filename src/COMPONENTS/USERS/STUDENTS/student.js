import React, { useState } from "react";
import Form from "../form";
import Bulk from "./bulk";
import SingleStudent from "./single";
const Student = ()=>{
    const [single,setSingle] = useState(false)
    const [bulk,setBulk] = useState(true)
    const students = ['single','import','bulk']
    const handler = (e)=>{
        const id = e.target.id
       if(id){
        if(id == students[0]){
            
            setSingle(true)
        }else{
            setSingle(false)

        }
        if(id == students[2]){
            
            setBulk(true)
        }else{
            setBulk(false)

        }
       }
    }
    return (
        <section >
            <div onClick={handler}>
                 
          <div  className="flex justify-between max-w-[700px] mt-9">
                        <div>
                            <h3 id="single" className={`${single ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>single student</h3>
                        </div>
                        <div>
                            <h3 id="bulk" className={`${bulk ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>bulk student</h3>
                        </div>
                        <div>
                            <h3 id="import" className="text-[#152036] uppercase font-[bolder] text-[1.3rem]">import from excel</h3>
                        </div>
                    </div>
            </div>
                    <div className="my-7 border-b-[2px] border-t-[2px] border-[#152036]">
                   <div>
                   {single && <SingleStudent/>}
                   </div>

                    <div>
                    {bulk && <Bulk /> }
                    </div>
                     
                   
                    </div>

        </section>
    )
}
export default Student