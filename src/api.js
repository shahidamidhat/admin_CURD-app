import axios from "axios";

export function GetUserData(){
    return axios.get(`https://605cc2fa6d85de00170db032.mockapi.io/admin-cred/users`)
}

export function PostUserData(data){
    return axios.post(`https://605cc2fa6d85de00170db032.mockapi.io/admin-cred/users`,data)
}

export function GetCurUserbyId(id){
    return axios.get(`https://605cc2fa6d85de00170db032.mockapi.io/admin-cred/users/${id}`)
}
export function UpdateCurUser(id,data){
    return axios.put(`https://605cc2fa6d85de00170db032.mockapi.io/admin-cred/users/${id}`,data)
}

export function DeleteUserById(id){
    return axios.delete(`https://605cc2fa6d85de00170db032.mockapi.io/admin-cred/users/${id}`)
}

