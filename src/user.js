import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {DeleteUserById, GetUserData, PostUserData} from "./api"

function User(){
    let [userdata,setuserData]=useState([])

    useEffect(async()=>{
        let users= await GetUserData()
        setuserData(...userdata,users.data)
    },[])
    
    
    return (
        <>
            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>                                        
                                            <th>Salary</th>
                                            <th>Edit Details</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>                                            
                                            <th>Salary</th>
                                            <th>Edit Details</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {userdata.map((user)=>{
                                            return (
                                                <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>                                            
                                            <td>{user.Salary}</td>
                                            <td><Link to={`/edituser/${user.id}`} >
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Edit</a>
                                            </Link>
                                            </td>
                                            <td>
                                                
                                            <button type="button" class="btn btn-primary" onClick={async(e) => {
                                                    const confirmBox = window.confirm(
                                                    "Do you really want to delete this User?"
                                                    )
                                                    if (confirmBox === true) {
                                                    await DeleteUserById(user.id)                                        
                                                    alert("User Deleted")
                                                    window.location.reload(true);
                                                    
                                                    }
                                                }}>Delete</button>
                                                
                                                
                                            </td>
                                        </tr>
                                            )
                                        })}
                                        
                                        
                                    </tbody>
                                </table>
                                </div>
        </>
    )
}

export default User;