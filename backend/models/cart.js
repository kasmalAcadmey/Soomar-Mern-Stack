import mongoose from "mongoose";


const cartScheama = new mongoose.Schema({
    userId: {
        type: String,
        reuqired: true
    },
    products: [
        {
            productId: {
                type:  mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required: true
            },

            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
},{timestamps: true})

export default mongoose.model('Cart', cartScheama)