import axios from "axios"
import * as types from "./ActionTypes"

const getdataRequest=()=>{
    return  {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getdataSucess=(payload)=>{
    return  {
        type:types.GET_PRODUCTS_SUCESS,
        payload
    }
}
const getdataFailure=()=>{
    return  {
        type:types.GET_PRODUCTS_FAILURE
    }
}
 
export const getdata=()=>(dispatch)=>{
    dispatch(getdataRequest())
    try {
        axios.post("http://localhost:4000/products",data).then((res)=>{
            dispatch(getdataSucess(res.data))
        })
    } catch (error) {
        console.log(error.message)
        dispatch(getdataFailure)
    }
}