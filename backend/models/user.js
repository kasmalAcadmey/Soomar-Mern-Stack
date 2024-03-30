import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avator: {
        type: String,
    },
    address: [
        {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            vilage: {
                type: String,
                required: true
            },
            streat: {
                type: String,
                required: true
            },
            houseNo: {
                type: String,
                required: true
            },
            pinCode: {
                type: String,
                required: true
            }
        }
    ]
 
},{timestamps: true})


export default mongoose.model('User', userShema)