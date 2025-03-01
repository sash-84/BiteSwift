const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"] // ✅ Email regex validation 
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String, 
        required: true
    },
    phone: { 
        type: String, 
        required: true,
        match: [/^\d{10}$/, "Phone number must be 10 digits"] // ✅ Restricts to 10 digits 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
},
{ timestamps: true }
);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
