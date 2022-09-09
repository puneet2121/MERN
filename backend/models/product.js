const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim:true
   },
  description: {
    type: String,
    required: true,
    maxlength: 500,
    trim:true
  },
  price: {
    type: Number,
    required: true,
    maxlength: 6
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true
  },
  stock: {
    type: Number
  },
  sold: {
    type: Number,
    default: 0
  },
  photo: {
    data: Buffer,
    contentType: String
  }
}, {timestamps: true} )
module.exports = mongoose.model("Product",productSchema)