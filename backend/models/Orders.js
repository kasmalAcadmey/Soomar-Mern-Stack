import mongoose from "mongoose";


const OrderScheama = new mongoose.Schema({
    userId: {
        type: String,
        reuqired: true
    },
            productId: {
                type: String,
                required: true
            },
            image: {
type: String,
required: true
            },
            price: {
type: Number,
required: true
            },
            quantity: {   
                type: Number,
                default: 1
            },
  
    ammount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    paymentMethod: {
type: String,
required: true
    },
    status: {
        type: String,
        default: "panding"
    }
},{timestamps: true})

export default mongoose.model('Orders', OrderScheama)