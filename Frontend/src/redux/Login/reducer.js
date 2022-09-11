import { loadData } from "../../utils/SessionStorage"
import * as types from "./ActionTypes"

const initState={
    loginSuccess:false,
    loginFailure:false,
    loginRequest:false,
    token:loadData("token")||"",
    error:""
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case (types.LOGIN_REQUEST):{
            return{
                ...state,
                loginRequest:true
            }
        }
        case (types.LOGIN_SUCESS):{
            return{
                ...state,
                loginRequest:false,
                loginSuccess:true,
                token:loadData("token")||payload
            }
        }
        case (types.LOGIN_FAILURE):{
            return{
                ...state,
                loginRequest:false,
                loginSuccess:false,
                loginFailure:true,
                error:payload
            }
        }
        case("LOGOUT"):{
           return{
                state:initState
           }
        }
        default:{
            return state
        }
    }
}