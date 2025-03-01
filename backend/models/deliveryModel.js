const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
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
    phone: {
        type: String,
        required: true
    },    
    vehicleNumber: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }, 
},
{timestamps: true});

module.exports = mongoose.model("Delivery", deliverySchema);