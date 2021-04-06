import React from "react";
import {useState} from "react"

let UserContext=React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    const [userlist,setUserList]=useState([])
    
    return <UserContext.Provider value={{username:"Shahida Midhat",userlist,setUserList}}>
        {children}
    </UserContext.Provider>
    
}