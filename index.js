const express = require ('express')
const cors = require("cors")
const app = express()
const path = require('path')
const bodyParser= require('body-parser')
const PORT = process.env.PORT || 8000
const db=require('./db')
const router = require("./routers")



app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))

app.use(express.json())


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Headers',"*")
    next()
})

app.use('/api',router)


// app.use('/upload',express.static(path.join(__dirname,'/../uploads')))
// app.use(express.static(path.join(__dirname,'/../stack_fd/build')))


// app.get("*",(req,res)=>{
//     try{
//     res.sendFile(path.join(`${__dirname}/../stack_fd/build/index.html`))
// } catch(e){
//     res.send("Oops error ocured")

// }
// })

app.use(cors())


app.listen(PORT,()=>{
    console.log(`Server is up and running in ${PORT}`)
})