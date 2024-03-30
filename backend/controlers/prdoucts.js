
import Product from "../models/Product.js"


export const CreateProdcut = async(req, res)=> {
    const newProdcut = new Product(req.body)
    try{
const saveProduct = await newProdcut.save()

res.status(200).json(saveProduct)
    }catch(err){
        res.status(501).send(err)
    }
}


export const DeleteProdcut = async (req,res)=> {
try{
if(req.params.id === req.user.id){
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).send('user has been deleted succussfly')
}else{
    return res.status(401).send("Product  not found")
}
}catch(err){
    res.status(401).send({message: err.message})
}
}

export const UpdateProdcut = async (req, res)=> {
    try{

         const Prodcut  =  await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new : true})
            res.status(200).send(Prodcut)
      
    }catch(err){
        res.status(401).send({message: err.message})
    }
}

export const SingleProdcut = async (req, res)=> {
    try{
        const product =await Product.findById(req.params.id)
        res.status(200).send(product)
    }catch(err){
        res.status(401).send({message: err.message})
        
    }
}
export const GetProducts = async (req, res)=> {
    const Qnew = req.query.new
    const name = req.query.title

    try{
let products = []
     if(Qnew){
products= await  Product.find().sort({createdAt: -1}).limit(12)
     }   else if (name){
        products = await Product.find({title: {
            $regex: name, $options: "i"
        }})
     }else{
        products = await Product.find()
     }
        res.status(200).send(products)
    }catch(err){
        res.status(401).send({message: err.message})
        
    }
}







