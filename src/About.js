import { useState } from "react"

function About (){
    const [employees,setEmployees]=useState([])
    function retreive(){
        fetch("https://reques.in/api/users?page=2")
        .then((res)=>{
            console.log(res)
            return res.json()
        })
        .then((jsonRes)=>{
            console.log(jsonRes)
            setEmployees(jsonRes.data)
        })
    }
    return(
        <div>
            <h1>About component</h1>
            <p><button className="btn" onClick={retreive}>get the data</button></p>
            {
                employees.map((pos)=>(
                    <div key={pos.id} className="group">
                    <p>{}</p>
                    </div>
                )
                )
            }
            <button onClick={retreive}>get the data</button>
        </div>
    )
}

export default About