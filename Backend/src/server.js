
const connect = require("./configs/db")
const app= require("./index")
app.listen(4000,()=>{
    try {
        connect()
        console.log("http:localhost:4000")

    } catch (error) {
        console.log(error)
    }
})