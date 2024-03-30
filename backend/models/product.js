import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }, 
    image: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    categories: {
        type: String
    },
    color: {
        type: Array
    },
    size: {
        type: Array
    },
    price: {
        type : Number,
        required: true
    },
    inStock : {
        type: Boolean, 
        default: true,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("Product", ProductSchema)