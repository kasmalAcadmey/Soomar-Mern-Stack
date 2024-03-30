import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import routerAuth from './routers/auth.js'
import cookieParser from "cookie-parser"
import routerUser from './routers/user.js'
import routerProduct from './routers/prodcut.js'
import routerCart from './routers/cart.js'
import cors from 'cors'
import routerOrder from './routers/order.js'

dotenv.config()



const app = express()

app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/auth",routerAuth)
app.use("/api/v1/user",routerUser)
app.use("/api/v1/products",routerProduct)
app.use("/api/v1/cart",routerCart)
app.use("/api/v1/orders",routerOrder)

app.use(cors()) 

const conected = async()=> {
    try{
await mongoose.connect(process.env.MOGNO_URL)
console.log('connected mogo')
    }catch(err){
        console.log(err)
    }
}

app.listen(8080, ()=> {
    console.log('server started ')
    conected()
})