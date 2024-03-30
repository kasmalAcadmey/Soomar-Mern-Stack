
import User from "../models/user.js";


export const DeleteUser = async (req,res)=> {
try{
if(req.params.id === req.user.id){
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send('user has been deleted succussfly')
}else{
    return res.status(401).send("account not found")
}
}catch(err){
    res.status(401).send({message: err.message})
}
}

export const UpdateUser= async (req, res)=> {
    try{
        if(req.params.id === req.user.id){
         const user =    await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new : true})
            res.status(200).send(user)
        }else{
            return res.status(401).send("account not found")
        }
    }catch(err){
        res.status(401).send({message: err.message})
    }
}

export const UserFind = async (req, res)=> {
    try{
        const user =await User.findById(req.params.id)
        const {password, ...info} = user._doc
        res.status(200).send(info)
    }catch(err){
        res.status(401).send({message: err.message})
        
    }
}



export const NewUserAddress= async(req,res)=> {
    const userId = req.params.id
    try{
const existUser= await User.findById(userId)
if(!existUser){
    return res.status(403).send("User Not Found")
}

await existUser.address.push(req.body)
await existUser.save()
res.status(200).send(existUser)
    }catch(err){
        res.status(501).send(err)
    }
}
