import * as types from "./ActionTypes"

const initState={
    registerSuccess:false,
    registerFailure:false,
    registerRequest:false,
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case (types.REGISTER_REQUEST):{
            return{
                ...state,
                registerRequest:true
            }
        }
        case (types.REGISTER_SUCESS):{
            return{
                ...state,
                registerRequest:false,
                registerSuccess:true
            }
        }
        case (types.REGISTER_SUCESS):{
            return{
                ...state,
                registerRequest:false,
                registerSuccess:false,
                registerFailure:true
            }
        }
        case("RESET"):{
           return{
                state:initState
           }
        }
        default:{
            return state
        }
    }
}