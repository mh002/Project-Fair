import { commonApi } from "./commonApi";
import base_url from "./server_url";


//register
export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}

//login
export const userLogin=async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}

//add-project
export const addProject=async(data,header)=>{
    return await commonApi("POST",`${base_url}/addProject`,data,header)
}

//home-projects
export const homeProjects=async()=>{
    return await commonApi("GET",`${base_url}/home-projects`,"","")
}

//all-projects
export const allProjects=async(header)=>{
    return await commonApi("GET",`${base_url}/all-projects`,"",header)
}

//user-projects
export const userProjects=async(header)=>{
    return await commonApi("GET",`${base_url}/user-projects`,"",header)
}