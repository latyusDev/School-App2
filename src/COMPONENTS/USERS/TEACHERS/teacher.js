import React,{useState, createContext} from "react";
import Form from "../form";
import Educators from "./educators";
import NewTeacher from "./newTeacher";
import { teacherDetails } from "./teacherDetails";
import Student from '../../../images/a1.jpg'
export const TeacherProps = createContext()

const Teacher = ()=>{
    
    const [teachers,setTeacherss] = useState(teacherDetails)
    const [details, setDetails] = useState([])
    const [picture, setPicture] = useState(Student)
    const [Teachers,setTeachers] = useState(false)
    const [Educator,setEducator] = useState(true)

    teachers.id = new Date().getTime().toString()

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setTeacherss({...teachers, [name]:value})
    
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newTeachers = {...teachers, id:new Date().getTime().toString()}
        setDetails([...details, newTeachers])
        localStorage.setItem('Teacher', JSON.stringify(details))  
    }

    // localStorage.removeItem('Teacher')  


// IMAGE
   
    const workers = ['newTeacher', 'Educator']

    const handler = (e)=>{
        const id = e.target.dataset.id

        if(id){

            if(id === workers[1]){
                setEducator(true)
    
            }else{
                setEducator(false)
    
            }
            if(id === workers[0]){
                setTeachers(true)
    
            }else{
                setTeachers(false)
            }
        }

        }
        const read = (e) =>{
            const reader = new FileReader()
            const prop = e.target.files[0]
            reader.readAsDataURL(prop)
            reader.onload = ()=>{
            setPicture(reader.result)
            setTeacherss({...teachers,profile:reader.result})
    
            } 
        }

    return (
        <TeacherProps.Provider 
        value={{
        details,
        teachers, 
        handleChange,
        handleSubmit,
        details, 
        teachers, 
        read,
        picture,
        setTeacherss,
        setTeachers,
        setDetails
        }} >
          <div className="flex gap-14 mt-9 " onClick={(e)=>handler(e)}>
                        
                            <h3 data-id="Educator" className={`${Educator ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>teacher</h3>
                        
                            <h3 data-id="newTeacher" className={`${Teachers ? "text-[#73889A] uppercase font-[bolder] text-[1.3rem]" : "text-[#152036] uppercase font-[bolder] text-[1.3rem]"}`}>new</h3>
                    </div>

                    <div className="mt-3 border-b-[2px] border-t-[2px] border-[#152036] mb-14">
                        {/* components */}
                    {Educator && <Educators />}
                    {Teachers &&  <NewTeacher />}
                
                   
                    </div>
        </TeacherProps.Provider>
    )
}
export default Teacher