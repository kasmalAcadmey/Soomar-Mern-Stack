import User from "../models/user.js"
import bcyrt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const Register = async (req, res)=> {
    const hash = bcyrt.hashSync(req.body.password, 10)
    const newuser = new User({
        ...req.body,
        password: hash
    })
    try{
const saveUser = await newuser.save()
res.status(200).json(saveUser)
    }catch(err){
        res.status(401).send({message: err.message})
    }
}


export const Login = async (req, res)=> {
 
const {email} = req.body
    try{
const user = await User.findOne({email})
if(!user){
    return res.status(404).send("email or password is invalid")
}

const isPassword = bcyrt.compareSync(req.body.password, user.password)
if(!isPassword){
    return res.status(404).send("email or password is invalid")
}
const token = jwt.sign({id: user._id}, process.env.JWT_ACCESS)
const {password, ...info} = user._doc
 res.cookie("accessToken",token, {
    httpOnly: true
 }).status(200).send(info)   
    }catch(err){
        res.status(401).send({message: err.message})
    }
}