import React from 'react'

class ClassComponent extends React.Component {
    state={
        subjectname:'react',
        year:2023,
        inputValue:"",
        students:[
            {
                name:"SaiKiran",
                age:19,
                gender:"male"
            },
            {
                name:"Chaitanya",
                age:200,
                gender:"Bilingual"
            },
            {
                name:"Avinash",
                age:150,
                gender:"Not to mention"
            }
        ]
        
    }
    handleClick=()=>{
        console.log(this.state.inputValue)
        this.setState({
            inputValue:""
        })
    }
    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    render() {
        return(
            <div>
                <h2>Good Morning</h2>
                <p>{this.state.subjectname}</p>
                <p>{this.state.year}</p>
                {
                    this.state.students.map((pos)=>(
                    <div>
                        <p>{pos.name}</p>
                        <p>{pos.age}</p>
                        <p>{pos.gender}</p>
                        </div>
                    ))
                }
                <input value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default ClassComponent
