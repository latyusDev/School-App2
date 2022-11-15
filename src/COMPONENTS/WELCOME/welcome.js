import React from "react";

const Welcome = () =>{
    const {firstName} = JSON.parse(sessionStorage.getItem('users'))
    return (
        <section >
            <h1> welcome  {firstName}</h1>
        </section>
    )
}

export default Welcome