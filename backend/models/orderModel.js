const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true 
    },
    restaurantId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Restaurant',
        required:true
    },
    deliveryPartner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Delivery", 
        default: null 
    },
    items: [
        { 
            name: { 
                type: String, 
                required: true 
            }, 
            price: { 
                type: Number, 
                required: true 
            }, 
            quantity: { 
                type: Number, required: true 
            } 
        }
    ],
    totalPrice: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Accepted', 'Out-for-delivery', 'Delivered'], default: 'Pending' 
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);
