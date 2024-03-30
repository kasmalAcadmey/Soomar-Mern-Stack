
import Order from "../models/Orders.js"


export const CreateOrders = async(req, res)=> {
    
    const newOrder = new Order(req.body)
    try{
const saveOrder = await newOrder.save()

res.status(200).json(saveOrder)
    }catch(err){
        res.status(501).send(err)
    }
}


export const DeleteOrder = async (req,res)=> {
try{
if(req.params.id === req.user.id){
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).send('order has been deleted succussfly')
}else{
    return res.status(401).send("order  not found")
}
}catch(err){
    res.status(401).send({message: err.message})
}
}

export const UpdateOrder = async (req, res)=> {
    try{

         const order  =  await Order.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new : true})
            res.status(200).send(order)
      
    }catch(err){
        res.status(401).send({message: err.message})
    }
}

export const SingleOrder = async (req, res)=> {
    try{
        const order =await Order.findById(req.params.id)
        res.status(200).send(order)
    }catch(err){
        res.status(401).send({message: err.message})
        
    }
}
export const GetOrders = async (req, res)=> {
    const userId = req.params.id
try{
    const order = await Order.find({userId})
  if(!order){
    return res.status(501).send("you don't have order")
  }
        res.status(200).send(order)
    }catch(err){
        res.status(401).send({message: err.message})
        
    }
}







