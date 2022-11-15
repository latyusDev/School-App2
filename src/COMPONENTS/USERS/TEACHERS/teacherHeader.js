import React from "react";

const TeacherHeader = ({}) =>{
    return(
        <div className="flex gap-14 mt-9 " onClick={(e, setEducator, workers, setTeachers)=>handler(e, setEducator, workers, setTeachers)}>
                        
                        <h3 data-id="Educator" className={`${Educator ?  "uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`  }>teacher</h3>
                    
                        <h3 data-id="newTeacher" className={`${Teachers ? "text-[#152036] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>new</h3>
                </div>
    )
}

export default TeacherHeader