import React,{useState,useContext} from "react";
import StudentInfo from "./studentInfo";
import StudentCard from "./StudentCard";
import Class from "./CLASS/clasS";
import distributeData from './studentInfo'

const SectionInfo = ({students,handleSection, setStudents})=>{


    // const [student2, setStudents] = useState(students)
    
    return(
        <section className="mr-[2rem]">
        {/* <ClasS /> */}
        <div className="flex mb-9 justify-between w-[100%] max-w-[700px] ">
            <h1 onClick={()=> handleSection('All')} className="text-[#011E3D] font-[cursive] uppercase font-[bolder] text-[1.6rem]">all</h1>
            <h1 onClick={()=> handleSection('section A')} className="text-[#011E3D] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section A</h1>
            <h1 onClick={()=> handleSection('section B')} className="text-[#011E3D] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section B</h1>
            <h1 onClick={()=> handleSection('section C')} className="text-[#011E3D] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section C</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {
                        students.map(student => {

                            return <StudentCard key={student.id} id2= {student.id} {...student}  students= {students}  setStudents={setStudents}/>

                        })
                    }

        </div>
    </section>
    )
}

export default SectionInfo 

// const InfoSection = ()=>{
//     const [change,setChange] = useState('class 2')
//     const handleSection =(e)=>{
//         const id = e.target.dataset.id
//         console.log(id)
//     }
//     return (
//             <section  onClick={handleSection}>
//                 <Form change={change } setChange={setChange} />
//                 <div className="flex justify-between w-[100%] max-w-[700px] ">
//                     <h1 data-id="All" className="text-[#ccc] font-[cursive] uppercase font-[bolder] text-[1.6rem]">all</h1>
//                     <h1 data-id="section A" className="text-[#ccc] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section A</h1>
//                     <h1 data-id="section B" className="text-[#ccc] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section B</h1>
//                     <h1 data-id="section C" className="text-[#ccc] font-[cursive] uppercase font-[bolder] text-[1.6rem]">section C</h1>
//                 </div>
//                 {/* <StudentInfo output={change}/> */}
//             </section>
//         )
// }

// const Form = ({change,setChange})=>{
//     return(
//            <form className="my-10">
//                <div>
//                <label className="font-[cursive] text-[#CCCCCC] text-[2rem] block font-bold">class</label>
//                <select  onChange={(e)=>setChange(e.target.value)} className="px-5 mt-4 outline-[0] max-w-[250px] w-[100%] rounded-lg border-[#D9D9D9] border-[2px]  py-3 ">
//                 <option className="text-[#D9D9D9]" value="class 1">class 1</option>
//                 <option className="text-[#D9D9D9]" value="class 2">class 2</option>
//                 <option className="text-[#D9D9D9]" value="class 5">class 5</option>
//                 <option className="text-[#D9D9D9]" value="class 3">class 3</option>
//                 <option className="text-[#D9D9D9]" value="class 7">class 7</option>
//                 <option className="text-[#D9D9D9]" value="class 6">class 6</option>    
//                </select>
//                </div>
//             </form> 
//     )
// }
// export default InfoSection