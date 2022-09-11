import axios from "axios"
import * as types from "./ActionTypes"

const registerRequest=()=>{
    return  {
        type:types.REGISTER_REQUEST
    }
}
const registerSucess=()=>{
    return  {
        type:types.REGISTER_SUCESS
    }
}
const registerFailure=()=>{
    return  {
        type:types.REGISTER_FAILURE
    }
}
export const resetRegister=()=>{
    return{
        type:"RESET"
    }
}
export const register=(data)=>(dispatch)=>{
    dispatch(registerRequest())
    try {
        axios.post("http://localhost:4000/register",data).then((res)=>{
            dispatch(registerSucess())
        })
    } catch (error) {
        console.log(error.message)
        dispatch(registerFailure)
    }
}