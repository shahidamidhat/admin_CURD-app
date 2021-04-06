import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {GetCurUserbyId, UpdateCurUser} from "./api"


function Edituser(props){
    console.log(props)
    const [name,setName]=useState("");
    const [position, setPosition]=useState("");
    const [office, setOffice]=useState("");
    const [age, setAge]=useState("");
    const [salary, setSalary]=useState("");
    let userdata={Name:name,Position:position,Office:office,Age:age,Salary:salary};
    

    useEffect(async ()=>{
        let user=await GetCurUserbyId(props.match.params.id);
        setName(user.data.Name)
        setPosition(user.data.Position)
        setSalary(user.data.Salary)
        setAge(user.data.Age)
        setOffice(user.data.Office)

        console.log(user)
    },[])

   
    return (
        <>
            <h1>User: {props.match.params.id}</h1>
            <div className="container">
                <form onSubmit={async (e)=>{
                    e.preventDefault();
                    await UpdateCurUser(props.match.params.id,userdata)
                    alert("Details Updated Successfully")

                }}>
                    <div className="row">
                <div className="col-6 mt-2">
                    <label for="name">Name</label><br/>
                    <input name="Name" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="col-6 mt-2">
                    <label for="position">Position</label><br/>
                    <input name="pos" className="form-control" id="position" value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                </div><div className="col-6 mt-2">
                    <label for="office">Office</label><br/>
                    <input name="Office" className="form-control" id="office" value={office} onChange={(e)=>{setOffice(e.target.value)}}/>
                </div><div className="col-6 mt-2">
                    <label for="age">Age</label><br/>
                    <input name="Age" className="form-control" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                </div>
                <div className="col-12 mt-2">
                    <label for="Sal">Salary</label><br/>
                    <input name="Salary" className="form-control" id="salary"value={salary}  onChange={(e)=>{setSalary(e.target.value)}}/>
                </div>
                <div className="row mt-2 justify-content-between">
                    <div className="col-4 mt-2">
                   
                    <button type="submit" className="btn btn-primary">Update User</button>
                    
                    </div>
                    <div className="col-4 mt-2">
                    <Link to="/user">
                        <button className="btn btn-danger">Cancel</button>
                        </Link>
                    </div>                    
                </div>
                </div>
                </form>
                
            </div>
        </>
    )
}

export default Edituser;