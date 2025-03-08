const mongoose = require('mongoose');

const paySchema = new mongoose.Schema({
  places: {
    type: mongoose.Schema.Types.ObjectId, required: true,  ref: 'Order'
  }  ,
  user: {
    type: mongoose.Schema.Types.ObjectId, required: true, ref: 'register'
  }  ,
  pay: {
    type: String,
    required: true,
  },
})

const payModel  = mongoose.model('payDetails', paySchema);

 module.exports = payModel
