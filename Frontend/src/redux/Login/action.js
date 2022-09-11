import axios from "axios"
import { saveData } from "../../utils/SessionStorage"
import * as types from "./ActionTypes"

const loginRequest=()=>{
    return  {
        type:types.LOGIN_REQUEST
    }
}
const loginSucess=(payload)=>{
    return  {
        type:types.LOGIN_SUCESS,
        payload
    }
}
const loginFailure=()=>{
    return  {
        type:types.LOGIN_FAILURE
    }
}
export const LOGOUT=()=>{
    return{
        type:"LOGOUT"
    }
}
export const login=(data)=>(dispatch)=>{
    dispatch(loginRequest())
    try {
        axios.post("http://localhost:4000/login",data).then((res)=>{
            console.log(res)
            saveData(res.data.token,"token")
            saveData(res.data.user,"user")
            dispatch(loginSucess(res.data.token))
        })
    } catch (error) {
        console.log(error.message)
        dispatch(loginFailure)
    }
}