import * as types from "./ActionTypes"

const initState={
    getdata:false,
    gtdatafailure:false,
    getdatarequest:false,
    data:[]
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case (types.GET_PRODUCTS_REQUEST):{
            return{
                ...state,
                getdatarequest:true
            }
        }
        case (types.GET_PRODUCTS_SUCESS):{
            return{
                ...state,
                getdatarequest:false,
                getdata:true,
                data:payload
            }
        }
        case (types.GET_PRODUCTS_FAILURE):{
            return{
                ...state,
                getdatarequest:false,
                getdata:false,
                gtdatafailure:true
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