import axios from "axios"

function Contact () {
    function Create(){
        axios.post("https://reqres.in/api/users",{
            username:"sai@gmail.com",
            password:"sai@1234"
        })
        .then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <h1>Contact component</h1>
            <button onClick={Create}>Send</button>
            </div>
    )
}

export default Contact