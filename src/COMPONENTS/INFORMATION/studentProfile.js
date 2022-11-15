import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../SIDEBAR/Sidebar'
import Profile from './profile'

const StudentProfile = ({studentProfile})=>{

    const { id }  = useParams()
    console.log(id)

    const profile = studentProfile.filter(student => student.id === id)
    
    return (

    <section >


        <div className="grid grid-cols-[1fr_3fr] bg-[#7990A3] ">

             <div className=''> 
            <Sidebar />
              </div>
              <div className='bg-[#011E3D]  '> 
              <Profile   profile ={profile}/>
              </div>

              </div>
    </section>
)
}

export default StudentProfile