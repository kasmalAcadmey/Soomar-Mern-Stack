import Cart from '../models/cart.js'


export const CreateCart = async(req, res)=>{
    const {userId, productId, quantity} = req.body
    try{
const cart = await Cart.findOne({userId})
if(cart){
    const checkProduct = cart.products.find((item)=> item.productId.toString() === productId)
    if(checkProduct){
        checkProduct.quantity +=1
        }else{
        cart.products.push({productId, quantity})
    }
  await cart.save()
  res.status(200).send("cart has been increase")
}else{
    const createCart  = new Cart({
        userId,
        products: [
            {productId, 
            quantity: quantity
            }
        ]
    })

    await createCart.save()
    res.status(200).send("cart has been created")
}

    }catch(err){
        res.status(501).send({message: err.message})
    }
}


export const FindCart = async(req, res)=> {
    const userId = req.params.id
    try{
const cart= await Cart.find({userId}).populate('products.productId', "image title price inStock description")
res.status(200).send(cart)
    }catch(err){
        res.status(501).send({message: err.message})
    }
}




export const DecreaseCart = async(req, res)=>{
    const {userId, productId} = req.body
    try{
const  cart = await Cart.findOne({userId})
if(!cart){
    return req.status(404).send("you don't have a cart")
}

const checkProduct = await cart.products.find((item)=> item.productId.toString() === productId)

if(!checkProduct){
    return req.status(404).send("you don't have a product")  
}else{
    checkProduct.quantity -= 1
}

await cart.save()
res.status(200).send('cart has been decreased')
    }catch(err){
        res.status(200).send(err)
    }
}


export const clearCart = async (req, res)=> {
    const userId = req.user.id
    try{
      const cart = await Cart.findOneAndDelete({userId})  

      res.status(200).send('cart has beeen clread')
    }catch(err){
        res.status(501).send(err)
    }
}



export const DeleteCart = async(req, res)=> {
const {userId, productId} = req.body
    try{
const cart = await Cart.findOne({userId})

if(!cart){
    return res.status(404).send('not found this cart')
}

const existProduct =  cart.products.find((item)=> item.productId.toString() === productId)


if(!existProduct){
    return res.status(404).send('not found this prodcut')
}

existProduct.deleteOne()

await cart.save()

res.status(200).send("cart has been deleted")
    }catch(err){
        res.status(501).send(err)
    }
}