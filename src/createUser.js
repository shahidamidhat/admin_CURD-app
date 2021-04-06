import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import { PostUserData } from "./api";


function Createuser(){
    
    const [name,setName]=useState("");
    const [position, setPosition]=useState("");
    const [office, setOffice]=useState("");
    const [age, setAge]=useState("");
    const [salary, setSalary]=useState("");

    let userdata={Name:name,Position:position,Office:office,Age:age,Salary:salary};
    async function adduser(e){
       e.preventDefault();
                   
                   await PostUserData(userdata)
                    setName("")
                    setOffice("")
                    setPosition("")
                    setSalary("")
                    setAge("");
    }



    return (
        <>
            <div className="container">
                <form >
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
                    <Link to="/user">
                        <button className="btn btn-primary" onClick={adduser}>Add User</button>
                        </Link>
                    </div>
                    <div className="col-4 mt-2">
                    <Link to="/user">
                        <button className="btn btn-danger">Go to Users</button>
                        </Link>
                    </div>                    
                </div>
                </div>
                </form>
                
            </div>
        </>
    )
}

export default Createuser;