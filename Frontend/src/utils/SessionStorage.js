export const saveData=(data,key)=>{
    sessionStorage.setItem(key,JSON.stringify(data))
}

export const loadData=(key)=>{
    return JSON.parse(sessionStorage.getItem(key))
}