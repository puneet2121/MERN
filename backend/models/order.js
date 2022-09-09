const mongoose = require('mongoose')
const {ObjectId } = mongoose.Schema;

const { Schema } = mongoose;

const productCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  name: String,
  count: Number,
  price: Number
})
const productCart = mongoose.model('ProductCart',productCartSchema)

const orderSchema = new Schema({
  products: [productCartSchema],
  transaction_id: {},
  amount: {type: Number},
  address: String,
  updated: Date,
  user: {
    type: ObjectId,
    ref: "User"
  }

  },
  {timespaces: true})

  const Order = mongoose.model('Order',orderSchema)
  module.exports = mongoose.model("Order",orderSchema)