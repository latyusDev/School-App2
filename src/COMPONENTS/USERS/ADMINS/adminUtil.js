import React from "react"

export const read = (e,setPicture)=>{
        const reader = new FileReader()
        const prop = e.target.files[0]
        console.log(prop)
        reader.readAsDataURL(prop)
        reader.onload = ()=>{
            setPicture(reader.result)
        } 
    }
