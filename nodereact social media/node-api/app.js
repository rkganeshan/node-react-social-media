const express=require("express")
const morgan=require("morgan")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
dotenv.config()
const mongoose=require('mongoose');
const expressValidator=require('express-validator')


//app
const app=express()



//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=>console.log('DB Connected!'))

//bring in routes
const postRoutes=require('./routes/post')
const authRoutes=require('./routes/auth')


// const myOwnMiddleware=(req,res,next)=>{
//     console.log("Middleware applied!!!")
//     next()
// }
//middleware
app.use(morgan("dev"))
// app.use(myOwnMiddleware)
app.use(expressValidator())
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/",postRoutes)
app.use("/",authRoutes)

const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`API App listening from port:${port}`)
})