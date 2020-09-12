const express = require('express')
const app = express()
const PORT =5000;
//aGhglohc8mqDLma7
const custommiddleware=(req,res,next)=>{
    console.log("middleware executed!")
    next()
}

app.use(custommiddleware);

app.get('/',(req,res)=>{
    console.log("home")
    res.send("Hello World!")
})

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})

