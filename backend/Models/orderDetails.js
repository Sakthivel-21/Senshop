const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  place: {
    type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Products'
  }  ,
  user: {
    type: mongoose.Schema.Types.ObjectId, required: true, ref: 'register'
  }  ,
  pack: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  delieveryDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
  
}, { timestamps: true });

const orderModel  = mongoose.model('Order', orderSchema);

 module.exports = orderModel
